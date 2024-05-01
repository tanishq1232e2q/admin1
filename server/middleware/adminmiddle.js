const adminmiddle=(req,res,next)=>{
    try {
        console.log(req.user);// comes from authmiddle
        const adminrole=req.user.isadmin
        if(!adminrole){
            return res.json("user is not admin")
        }
        // res.status(200).json(req.user)
        next();
    } catch (error) {
        next(error)
    }
}

module.exports=adminmiddle