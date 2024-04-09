const mongoose=require('../../config/db/db')

const Roles=new mongoose.Schema({
    role:{required:true,unique:true,type:String},
    responsibilities:[{type:String,required:true}]
})

module.exports=mongoose.model("Roles",Roles)
