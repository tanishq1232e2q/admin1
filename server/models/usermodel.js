const mongoose=require("mongoose")
const {Schema} = mongoose

const jwt=require("jsonwebtoken")
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }
})
//before defining schema
//another method to create hashing
// userschema.pre("save",async function(next){
//     const user=this;//user body

//     if(!user.isModified("password")){
//         next()
//     }

//     try {
//         const salt=await bcrypt.genSalt(10)
//         const hashpass=await bcrypt.hash(user.password,salt)
//         user.password=hashpass;
//     } catch (error) {
//         console.log(error);
//     }
// })

//this method can be used anywhere
userschema.methods.generateToken=async function(){
    try {
        //payload
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isadmin:this.isadmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"
        }
    )

    } catch (error) {
        console.log(error);
    }
}


const User=new mongoose.model("user",userschema)
module.exports=User