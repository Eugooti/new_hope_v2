const readById = async (Model, req, res) => {
    try {
        // Find document by school ID
        const studentId = req.params.id
        const result = await Model.findOne({studentId});
        // If no results found, return document not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No student found by this school id: ' + req.params.id,
            });
        } else {
            // Return success response
            return res.status(200).json({
                success: true,
                result,
                message: 'We found this document by this school id: ' + req.params.id,
            });
        }
    } catch (error) {
        // Server Error
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
};


const readAll = async (model,req,res) => {
    try {
        const response=await model.find();

        return res.status(200).json({
            success:true,
            response:response,
        })

    }catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
}

module.exports = {readById,readAll};
