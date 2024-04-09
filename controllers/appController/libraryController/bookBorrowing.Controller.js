const bookBorrowingModel=require('../../../model/library/BookBorrowing')
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(bookBorrowingModel)