const departmentModal=require('../../../model/departments/department')
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports = CRUDMethods(departmentModal);