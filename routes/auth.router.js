const express=require('express')
const {catchErrors}=require('../handlers/errorHandlers')
const authMethods=require('../controllers/authController/auth.Controller')

const router=express.Router()

router.route('/auth/login').post(catchErrors(authMethods.login))

module.exports=router