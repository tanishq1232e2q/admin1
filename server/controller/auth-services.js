
const servicemodel=require("../models/servicemodel")
const getdata=async(req,res)=>{
    try {
        const data=await servicemodel.find()

        if (!data) {
            return res.json("error in services")
        }
        return res.json(data);
        
        

    } catch (error) {
        console.log(error);
    }
}

module.exports=getdata