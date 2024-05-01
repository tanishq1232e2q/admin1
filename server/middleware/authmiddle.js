const jwt=require("jsonwebtoken");
const User=require("../models/usermodel")
const authmiddle=async(req,res,next)=>{
    const token=req.header("authorization")

    if (!token) {
        return res.json("token not found")
    }
    console.log("token from authmiddle",token);

    const jwttoken=token.replace("Bearer","").trim()
    
    try {
        const isverify=jwt.verify(jwttoken,process.env.JWT_SECRET_KEY)
        console.log(isverify);
        const userdata=await User.findOne({email:isverify.email}).select({
            password:0,//select all except password
        });
        console.log(userdata);

        
        req.user=userdata;// this is used in adminmiddleware
        req.token=token;
        req.userId=userdata._id;
        next();
    } catch (error) {
        console.log(error);
    }

}
module.exports=authmiddle