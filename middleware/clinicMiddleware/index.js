const {addRecord}=require('./create/create')
const {remove}=require('./delete/delete')
const {readAll,readByStudent}=require('./read/index')

const ClinicMethods = (model) => {
  const crudMethods={};

  crudMethods.create=async (req,res)=>{
      await addRecord(model,req,res)
  }

  crudMethods.delete=async (req,res)=>{
      await remove(model,req,res)
  }

  crudMethods.readAll=async (req,res)=>{
      await readAll(model,req,res)
  }

  crudMethods.readeByStudent=async (req,res)=>{
      await readByStudent(model,req,res)
  }



  return crudMethods

}

module.exports= {ClinicMethods}