const {User}=require("../models/auth")

const checkCreds=(req,res,next)=>{
    const {name,email,password,cpassword}=req.body

    if(name.length<=3 || email.length<=5 ||password!==cpassword){
        res.send({"status":false,"message":"invalid creds"})
    }
    const user=new User.find({
        email
    });
    if(user.length>=1){
        res.send({"status": false,"message":"user already exist"})
    }
    else{
        next();
    }
}
module.exports={checkCreds}