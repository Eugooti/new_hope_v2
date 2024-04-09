const mongoose=require('../../config/db/db')

const bookBorrowing=new mongoose.Schema({
    studentId:{type:String,required:true},
    booksBorrowed:[{bookId:{type:String,required:true}}],
    borrowDate:{type:Date,required:true,default:Date.now()},
    returnDate:{type:Date,required:true}
})

module.exports=mongoose.model('bookBorrowing',bookBorrowing);