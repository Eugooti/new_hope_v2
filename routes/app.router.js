const express=require('express')
const {catchErrors}=require('../handlers/errorHandlers')

const procurementController=require('../controllers/appController/procurementController/procurement.Controller')
const libraryController=require('../controllers/appController/libraryController/library.Controller')
const bookBorrowingController=require('../controllers/appController/libraryController/bookBorrowing.Controller')
const courseBookController=require('../controllers/appController/courseBooksController/courseBook.Controller')
const eventsController=require('../controllers/appController/eventsController/events.Controller')


const router=express.Router();

// -----------------------------------------procurement routes------------------------------------------------------------

router.route('/procurement/create').post(catchErrors(procurementController.create))
router.route('/procurement/read').get(catchErrors(procurementController.readAll))
router.route('/procurement/read/:id').get(catchErrors(procurementController.readById))
router.route('/procurement/update/:id').put(catchErrors(procurementController.update))
router.route('/procurement/delete/:id').delete(catchErrors(procurementController.remove))

// ------------------------------------------Library routes-------------------------------------------------------------

router.route('/library/create').post(catchErrors(libraryController.create))
router.route('/library/read').get(catchErrors(libraryController.readAll))
router.route('/library/read/:id').get(catchErrors(libraryController.readById))
router.route('/library/update/:id').put(catchErrors(libraryController.update))
router.route('/library/delete/:id').delete(catchErrors(libraryController.remove))

// ------------------------------------------book borrowing routes-------------------------------------------------------------

router.route('/borrowing/create').post(catchErrors(bookBorrowingController.create))
router.route('/borrowing/read').get(catchErrors(bookBorrowingController.readAll))
router.route('/borrowing/read/:id').get(catchErrors(bookBorrowingController.readById))
router.route('/borrowing/update/:id').put(catchErrors(bookBorrowingController.update))
router.route('/borrowing/delete/:id').delete(catchErrors(bookBorrowingController.remove))

// ------------------------------------------course book routes-------------------------------------------------------------

router.route('/courseBook/create').post(catchErrors(courseBookController.create))
router.route('/courseBook/read').get(catchErrors(courseBookController.readAll))
router.route('/courseBook/read/:id').get(catchErrors(courseBookController.readById))
router.route('/courseBook/update/:id').put(catchErrors(courseBookController.update))
router.route('/courseBook/delete/:id').delete(catchErrors(courseBookController.remove))

// ------------------------------------------events routes-------------------------------------------------------------
router.route('/events/create').post(catchErrors(eventsController.create))
router.route('/events/read').get(catchErrors(eventsController.readAll))
router.route('/events/read/:id').get(catchErrors(eventsController.readById))
router.route('/events/update/:id').put(catchErrors(eventsController.update))
router.route('/events/delete/:id').delete(catchErrors(eventsController.remove))


module.exports=router;