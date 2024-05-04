const {Login}=require('./login')
const {logout}=require('./logout')

const authMethods=()=>{
    const AUTHMethods={}

    AUTHMethods.login=async (req,res,next)=>{
        await Login(req,res,next)
    }

    AUTHMethods.logout=async (req,res)=>{
        await logout(req,res)
    }

    return AUTHMethods
}

module.exports= {authMethods}