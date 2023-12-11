const express=require('express');
// const { router } = require('./router');
const {login,logout,signup}=require('../functions/auth')
const {checkCreds}=require("../middleware/checkCreds");
const authrouter=express.Router()
authrouter.get('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',checkCreds,signup)
module.exports={authrouter}