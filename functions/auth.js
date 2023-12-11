const {User}=require('../models/auth')
const login=(req,res)=>{
    const {email,password}=req.body
    const user=new User.find({
        email,password
    });
    if(user.length>=1){
        res.send({"status":true,user})
    }
    else{
        res.send({"status":false,"message":"invalid creds"})
    }
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