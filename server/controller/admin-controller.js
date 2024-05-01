
const User =require("../models/usermodel")
const Conatct =require("../models/contectmodel")

const adminuser=async(req,res)=>{
    try {
        // const users =await User.find();
        const users =await User.find({},{password:0});//except password

        if(!users || users.lemgth==0){
            return res.json("no users found")
        }
    return res.json(users)
    } catch (error) {
        console.log(error);
    }
}

const allconatcts=async(req,res)=>{
try {
    const contacts=await Conatct.find();
    if (!contacts) {
        return res.json("no content found")
    }
    return res.json(contacts)
} catch (error) {
    console.log(error);
}
}

//delete user in admin panel

const deleteuserbyid=async(req,res)=>{
    try {
        const id=req.params.id //getting id from url

        const deletedata=await User.deleteOne({_id:id})
        return res.json("user deleted")
    } catch (error) {
        console.log(error);
    }
}

const getuserbyid=async(req,res)=>{
    try {
        const id=req.params.id
        const data =await User.find({_id:id},{password:0});//except password
        return res.json(data)
       

    } catch (error) {
        console.log(error);
    }
}
const updateuserbyid=async(req,res)=>{
    try {
        const id=req.params.id
        const updatedata=req.body;
        const updateuser=await User.updateOne({_id:id},{$set:updatedata})
        return res.json(updatedata)
    } catch (error) {
        console.log(error);
    }
}






module.exports={updateuserbyid,adminuser,allconatcts,getuserbyid,deleteuserbyid}