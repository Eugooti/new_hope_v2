const express=require('express')
const {catchErrors}=require('../handlers/errorHandlers')

const rolesController=require('../controllers/adminController/rolesController/roles.controller')
const feeController=require('../controllers/adminController/feeController/feeCategory.controller')
const staffController=require('../controllers/adminController/staffController/staff.Controller')
const studentController=require('../controllers/adminController/StudentsController/students.controller')
const clinicMethods=require('../controllers/adminController/clinicController/clinic.controller')
const timetableController=require('../controllers/adminController/timetable/timetable.controller')


const router=express.Router();

// -----------------------------------------------role specific routes-----------------------------------------------------

router.route('/roles/create').post(catchErrors(rolesController.create))
router.route('/roles/read').get(catchErrors(rolesController.readAll))
router.route('/roles/read/:id').get(catchErrors(rolesController.readById))
router.route('/roles/update/:id').put(catchErrors(rolesController.update))
router.route('/roles/delete/:id').delete(catchErrors(rolesController.remove))


// -----------------------------------------------fee specific routes-----------------------------------------------------

router.route('/fee/create').post(catchErrors(feeController.create))
router.route('/fee/read').get(catchErrors(feeController.readAll))
router.route('/fee/read/:id').get(catchErrors(feeController.readById))
router.route('/fee/update/:id').put(catchErrors(feeController.update))
router.route('/fee/delete/:id').delete(catchErrors(feeController.remove))


// -----------------------------------------------role specific routes-----------------------------------------------------

router.route('/staff/create').post(catchErrors(staffController.createStaff))
router.route('/staff/read').get(catchErrors(staffController.readAll))
router.route('/staff/read/:id').get(catchErrors(staffController.readById))
router.route('/staff/update/:id').put(catchErrors(staffController.update))
router.route('/staff/delete/:id').delete(catchErrors(staffController.remove))

// -----------------------------------------------role specific routes-----------------------------------------------------

router.route('/fee/create').post(catchErrors(feeController.create))
router.route('/fee/read').get(catchErrors(feeController.readAll))
router.route('/fee/read/:id').get(catchErrors(feeController.readById))
router.route('/fee/update/:id').put(catchErrors(feeController.update))
router.route('/fee/delete/:id').delete(catchErrors(feeController.remove))


// -----------------------------------------------students specific routes-----------------------------------------------------

router.route('/students/create').post(catchErrors(studentController.create))
router.route('/students/read').get(catchErrors(studentController.readAll))
router.route('/students/read/:id').get(catchErrors(studentController.readById))
router.route('/students/update/:id').put(catchErrors(studentController.update))
router.route('/students/delete/:id').delete(catchErrors(studentController.remove))


// -----------------------------------------------students specific routes-----------------------------------------------------

router.route('/clinic/create/:studentsId').post(catchErrors(clinicMethods.create))
router.route('/clinic/read').get(catchErrors(clinicMethods.readAll))
router.route('/clinic/read/:id').get(catchErrors(clinicMethods.readeByStudent))
router.route('/clinic/delete/:id').delete(catchErrors(clinicMethods.delete))


// -----------------------------------------------timeTable specific routes-----------------------------------------------------

router.route('/timeTable/create').post(catchErrors(timetableController.create))
router.route('/timeTable/read').get(catchErrors(timetableController.readAll))
router.route('/timeTable/read/:id').get(catchErrors(timetableController.readById))
router.route('/timeTable/update/:id').put(catchErrors(timetableController.update))
router.route('/timeTable/delete/:id').delete(catchErrors(timetableController.remove))





module.exports=router


