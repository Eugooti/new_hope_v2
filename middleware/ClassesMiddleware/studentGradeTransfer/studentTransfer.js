const studentsModel = require("../../../model/students/students");
const attendance=require('../../../model/attendance/attendance')
const clinic=require('../../../model/clinic/clinic')
const feeCollection=require('../../../model/fee/feeCollection/feeCollection')

const StudentTransfer = async (model, req, res) => {
    try {
        const { studentId, newGrade } = req.body;
        const grade=req.params.grade;

        // Step 1: Find the student in their initial class
        const initialGrade = await model.findOne({ grade });

        // Extract the student data
        const studentData = initialGrade.students.find(student => student.studentId === studentId);

        if (!studentData) {
            return res.status(400).send({ error: `Student with ID ${studentId} not found in any grade.` });
        }

        const updateStudentData=await studentsModel.findOneAndUpdate({studentId},
            {$set: {grade: newGrade},},
            {new:true}
            );

        const Attendance=await attendance.findOneAndUpdate({studentId},
            {$set: {grade: newGrade},},
            {new:true}
            );

        const Clinic=await clinic.findOneAndUpdate({studentId},
            {$set: {grade: newGrade},},
            {new:true}
            );

        const fee=await feeCollection.findOneAndUpdate({studentId},
            {$set: {grade: newGrade},},
            {new:true}
            );



        // Step 2: Transfer the student data to the new class
        const newGradeObj = await model.findOneAndUpdate(
            { grade: newGrade },
            { $push: { students: studentData } },
            { new: true, upsert: true }
        );

        // Step 3: Delete the student from the initial class
        const updatedInitialGrade = await model.findOneAndUpdate(
            { grade },
            { $pull: { students: { studentId: studentId } } },
            { new: true }
        );

        if (updatedInitialGrade && newGradeObj && updateStudentData && Attendance && Clinic && fee) {
            return res.status(200).json({
                success: true,
                message: `Student transferred successfully to grade ${newGrade}.`,
            });
        }

    } catch (err) {
        console.error('Error transferring student:', err);
        return res.status(500).json({ error: 'Error transferring student.' });
    }
}

module.exports = { StudentTransfer };
