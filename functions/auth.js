const {User}=require('../models/auth')
const bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
const signature="@#33ttSG"

const login=async(req,res)=>{
    const {email,password}=req.body
    const user= await User.find({
        email
    });
    if(user.length>=1){
        const signal=await bcrypt.compare(password,user[0].password)
        if(signal){
            var token=jwt.sign({email : 'akash@gmail.com'},signature);
            console.log("token: ",token)
            var decoded=jwt.verify(token,signature);
            console.log(decoded)
        res.send({"status":true,user})
        }
        else{
            res.send({"status":false,"message":"invalid creds"})
        }
    }
    else{
        res.send({"status":false,"message":"creds"})
    }
}
const logout=(req,res)=>{

    res.send("hello i am logout")
}
const signup=async (req,res)=>{
    const {name,email,password}=req.body
    const salt=bcrypt.genSaltSync(10);
    const hashedpassword=await bcrypt.hashSync(password,salt)
    console.log(hashedpassword)
    const user=new User({
        name,email,password: hashedpassword
    });
    user.save().then(()=>console.log('born'));
    res.send("hello i am signup")
}
module.exports={login,logout,signup}