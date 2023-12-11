const express=require('express');
// const { router } = require('./router');
const {login,logout,signup}=require('../functions/auth')
const authrouter=express.Router()
authrouter.get('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',signup)
module.exports={authrouter}