const {create}=require('./create/create');
const {readByGrade,readAll}=require('./read/read');
const {StudentTransfer}=require('./studentGradeTransfer/studentTransfer');
const {update}=require('./update/update');

const GradeMethods = (model) => {

    const methods={}

    methods.create=async (req,res)=>{
        await create(model,req,res)
    }

    methods.readAll=async (req,res)=>{
        await readAll(model,req,res)
    }

    methods.readByGrade=async (req,res)=>{
        await readByGrade(model,req,res)
    }
    methods.update=async (req,res)=>{
        await update(model,req,res)
    }

    methods.transfer=async (req,res)=>{
        await StudentTransfer(model,req,res)
    }

    return methods

}

module.exports= {GradeMethods}

