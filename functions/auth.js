const {User}=require('../models/auth')
const login=(req,res)=>{
    res.send("hello i am login")
}
const logout=(req,res)=>{

    res.send("hello i am logout")
}
const signup=(req,res)=>{
    const {name,email,password}=req.body
    const user=new User({
        name,email,password
    });
    user.save().then(()=>console.log('born'));
    res.send("hello i am signup")
}
module.exports={login,logout,signup}