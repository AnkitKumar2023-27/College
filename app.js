const express=require("express");
const app=express();
const path=require("path");
const  ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
// const mongoose=require("mongoose");
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs", ejsMate);
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));


   app.get("/home",(req,res)=>{
    res.render("./listings/home.ejs")
   })


app.get("/",(req,res)=>{
    res.send("hi i am root")

})

app.listen("8080",(req,res)=>{
    console.log("server is working")
})