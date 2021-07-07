const express=require('express');
const route=express.Router();
const {addUserValidation,userValidation}=require('../validations/uservalidation');
const  {signup} =require('../signupController/signupController')
const {signin}  =require('../signinController/signincontroller');
const  {referredBy}= require('../referredByController/referredbycontroller')
const {referid} =require('../referidController/referidcontroller')



route.post('/signup',addUserValidation,signup);
route.post('/signin',userValidation,signin);
route.get('/referby/:id',referredBy);
route.get('/referid/:id',referid)

module.exports=route;