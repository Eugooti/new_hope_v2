const studentModel=require('../../../model/students/students')
const {studentMethods}=require('../../../middleware/studentsMiddleware/index')

module.exports=studentMethods(studentModel)