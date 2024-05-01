

const validate=(schema)=>async(req,res,next)=>{
    try {
        const parse=await schema.parseAsync(req.body)
        req.body=parse
        next()
    } catch (error) {
        const message=error.errors[0].message
        console.log(message);
    }
}

module.exports=validate