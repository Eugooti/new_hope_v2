const model=require('../../../model/classes/grades')
const {GradeMethods}=require('../../../middleware/ClassesMiddleware/index')

module.exports = GradeMethods(model)