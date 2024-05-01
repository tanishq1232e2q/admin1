const {Schema,model,Mongoose, default: mongoose}=require("mongoose")

const serviceschema=new Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
})


const service=new model("services",serviceschema);
module.exports=service