require("dotenv").config()
const express=require("express");
const app=express();
const cors=require("cors");
const Connection=require("./db/db")
const router=require("./routers/auth-router")
const contactroute=require("./routers/contact-route")
const adminrouter=require("./routers/admin-router")
app.use(express.json())

const corsoption={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE",
    credentials:true
}

app.use(cors(corsoption))
app.use("/api/auth/",router)
app.use("/api/form/",contactroute)
app.use("/api/admin/",adminrouter)

// dotenv.config()

const port=8000;
Connection()

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})