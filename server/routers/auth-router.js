const express=require("express");

const middle=require("../middleware/middle")
const router=express.Router();
const validate=require("../middleware/validatemiddle")
const schema=require("../middleware/middle")
const {home,register, login,user}=require("../controller/auth-controller");
const contactform = require("../controller/auth-contact");
const authmiddle=require("../middleware/authmiddle")
const services=require("../controller/auth-services")
// router.get("/",(req,res)=>{
//     res.send("hello babe")
// })

router.get("/",home)
// router.post("/register",validate(schema),register)
router.post("/register",register)
router.post("/login",login)
router.post("/contact",contactform)
router.get("/services",services)

router.get("/user",authmiddle,user)

module.exports=router