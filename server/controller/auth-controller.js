const User=require("../models/usermodel")
const bcrypt=require("bcryptjs")
const home=async(req,res)=>{
try {
    res.send("welcome home")
} catch (error) {
    console.log(error);
}
}

const register=async(req,res)=>{
    const {username,email,password,phone}=req.body;

    const useremail=await User.findOne({email:email})
    if (useremail) {
       return res.status(400).send("user exist");
    }
    
    
    try {

        
        const salt=10;
        const hashpass=await bcrypt.hash(password,salt);
        // const userdata=new User(req.body);
        const userdata=new User({username,email,phone,password:hashpass});
        console.log(userdata);



        const savedata= await userdata.save();

        console.log(req.body);
        res.json({savedata,token:await userdata.generateToken(),userid:userdata._id.toString()})
    } catch (error) {
        console.log(error);
    }
    


}

const login=async(req,res)=>{
    try {
        
        const {email,password}=req.body
        const userexist=await User.findOne({email:email})
        console.log(userexist);
    
        if (!userexist) {
             res.status(400).json("invalid credentials")
    
        }
        const usera=await bcrypt.compare(password,userexist.password)
        console.log(usera);
    
        if (usera) {
           return res.json({token:await userexist.generateToken(),userid:userexist._id.toString()})
        }
        else{
           return res.json("invalid email or password")
        }
    } catch (error) {
        console.log(error);
    }

}

const user=async(req,res)=>{
    try {
        const userdata=req.user;
        console.log(userdata);
        return res.json(userdata);
    } catch (error) {
        console.log(error);
    }
}





module.exports={home,register,login,user}