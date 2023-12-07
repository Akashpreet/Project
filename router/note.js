const express=require('express');
// const { router } = require('./router');
const noterouter=express.Router()
const {createnote,editnote,deletenote}=require('../functions/note')
const {checklogin}=require('../middleware/checklogin')
noterouter.get('/createnote',checklogin,createnote)
noterouter.get('/editnote',checklogin,editnote)
noterouter.get('/deletenote',checklogin,deletenote)
module.exports={noterouter}