import express from "express";
import cors from "cors"
const app = express()
app.use(cors())
const PORT = 5000
import upload from "./middleware/multer.js";

console.log("My app is running")
app.get("/" , (req , res)=>{
    res.send("I am running")
})

app.post("/upload" , upload.single("profilepic") , (req ,res)=>{
    console.log(req.file)
    res.send("okay ji report hai")
})

app.listen(PORT , ()=>{console.log(`server is running on ${PORT}`)})