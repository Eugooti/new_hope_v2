const clinicModel=require('../../../model/clinic/clinic')
const {ClinicMethods}=require('../../../middleware/clinicMiddleware/index')

module.exports=ClinicMethods(clinicModel)