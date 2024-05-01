const contact =require("../models/contectmodel")

const contactform=async(req,res)=>{
    try {
        const response=req.body

        await contact.create(response)
        res.json("message send")
    } catch (error) {
        console.log(error);
    }
}

module.exports=contactform