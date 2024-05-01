const express=require("express");
const contactform = require("../controller/auth-contact");

const router=express.Router();

router.get("/contact",contactform)

module.exports=router