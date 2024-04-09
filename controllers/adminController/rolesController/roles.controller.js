const rolesModel=require('../../../model/Roles/Role.model')
const {CRUDMethods}=require('../../../middleware/CRUDmethods')

module.exports=CRUDMethods(rolesModel)