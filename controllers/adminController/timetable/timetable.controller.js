const timetableModel = require('../../../model/timetable/timetable');
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports = CRUDMethods(timetableModel)

