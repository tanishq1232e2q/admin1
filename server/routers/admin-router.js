const express=require("express");
const router=express.Router();
const {adminuser,allconatcts, deleteuserbyid,getuserbyid,updateuserbyid}=require("../controller/admin-controller")
// const adminuser=require("../controller/admin-controller")
const authmiddle=require("../middleware/authmiddle")
const adminmiddle=require("../middleware/adminmiddle")
router.get("/users",authmiddle,adminmiddle,adminuser)
router.delete("/users/delete/:id",authmiddle,adminmiddle,deleteuserbyid)
router.get("/contacts",authmiddle,allconatcts)
router.get("/users/:id",authmiddle,adminmiddle,getuserbyid)
router.put("/users/update/:id",authmiddle,adminmiddle,updateuserbyid)

module.exports=router