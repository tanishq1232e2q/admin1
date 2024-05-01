const {z}=require("zod")

const zodschema=z.object({
    username:z.string({
        error:"name is required"

    }).trim().min(3,{
        message:"name must be atleast 3"
    }).max(80,{
        message:"name must be atleast 3"
    }),
    email:z.string({
        error:"email is required"

    }).trim().email({
        message:'Invalid email'
    }),
    phone:z.string({
        error:"phone is required"

    }).trim().min(10,{
        message:"phome must be 10"
    }).max(20,{
        message:"phone must be 10"
    }),
    password:z.string({
        error:"password is required"

    }).trim().min(7,{
        message:"password must be atleast 6"
    }).max(80,{
        message:"password not greater than 80"
    }),

    

})

module.exports=zodschema