const {create}=require('./create/create')
const {readAll,readById}=require('./read/read')
const {remove}=require('./delete/delete')
const {update}=require('./update/update')


const studentMethods = (model) => {

    const methods={}

    methods.create=async (req,res)=>{
        await create(model,req,res)
    }

    methods.readAll=async (req,res)=>{
        await readAll(model,req,res)
    }
    methods.readById=async (req,res)=>{
        await readById(model,req,res)
    }

    methods.update=async (req,res)=>{
        await update(model,req,res)
    }

    methods.remove=async (req,res)=>{
        await remove(model,req,res)
    }


  return methods
}

module.exports={studentMethods}