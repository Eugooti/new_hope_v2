const crypto=require('crypto')


//generates a random 8 digits  id for the staff members
function generateStaffId() {
    // Generate a random number between 10000000 and 99999999
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
}

const createStaff = async (model,req,res) => {
    try {
        const {firstName,lastName,email,phone,idNumber,accountNumber,salary,role,createdBy}=req.body;

        const salt = crypto.randomBytes(16).toString('hex');

        const hashedPassword =crypto.createHash('sha256').update(email + salt).digest('hex');

        const userInstance=new model({
            firstName,
            lastName,
            staffId:generateStaffId(),
            email,
            phone,
            idNumber,
            accountNumber,
            salary,
            role,
            password:hashedPassword,
            createdBy,
            salt
        });

        const result=await userInstance.save();

        if (!result){
            return res.status(500).json({
                success:false,
                message:"Failed to create user"
            })
        }

        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })


    }catch (error) {
        // If error is thrown by Mongoose due to required validations
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            console.log(error)
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }

}

module.exports= {createStaff};