const {User}=require("../models/auth")

const checklogin=(req,res,next)=>{
    const {email,password}=req.body
    const user=new User.find({
        email,password
    });
    if(user.length>=1){
        next();
    }
    else{
        res.send({"status":false,"message":"invalid creds"})
    }
}
module.exports={checklogin}