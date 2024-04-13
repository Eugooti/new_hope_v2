const remove = async (Model, req, res) => {
    try {
        // Find the document by id and delete it
        const id=req.params.id;

        const result = await Model.findByIdAndDelete(id);

        // If no results found, return document not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No document found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the document by id: ' + req.params.id,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
};

module.exports = remove;
