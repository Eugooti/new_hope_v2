const addRecord = async (model, req, res) => {
    try {
        const { studentsId } = req.params;
        const { visit_report } = req.body;

        // Validate the visit_report data
        if (!Array.isArray(visit_report) || visit_report.length === 0 || !visit_report.every(item => typeof item === 'object')) {
            return res.status(400).json({
                success: false,
                message: 'Invalid visit_report data',
            });
        }

        // Filter out report objects with empty symptoms and prescriptions
        const validReports = visit_report.filter(report => {
            return report.symptoms.length > 0 && report.prescriptions.length > 0;
        });

        // Update the document with valid visit_report data
        const response = await model.findOneAndUpdate(
            { studentsId },
            { $addToSet: { visit_report: { $each: validReports } } },
            { new: true, upsert: true }
        );

        // Handle response
        if (!response) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'Student not found with id ' + studentsId,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Record added successfully",
            data: response // Return the updated document for clarity
        });

    } catch (error) {
        // Error handling
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}

module.exports = { addRecord };
