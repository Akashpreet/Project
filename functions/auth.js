const {User}=require('../models/auth')
const login=(req,res)=>{
    res.send("hello i am login")
}
const logout=(req,res)=>{

    res.send("hello i am logout")
}
const signup=(req,res)=>{
    const user=new User({name:'Akash',email:'xyz@gmail.com',password:"zxcv"});
    user.save().then(()=>console.log('born'));
    res.send("hello i am signup")
}
module.exports={login,logout,signup}