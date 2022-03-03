
//express method call
const express = require("express");
const app = express();

//app.get("rout","callback")
//rout --- where are u going 
app.get("/",(req,res)=>{
    res.write("<h1>hello word</h1>  ");
    res.write("welcome to home page.. ");
    res.send();
});

app.get("/about",(req,res)=>{
    res.send({
        id: 1,
        name: "jemin",

    });
});

app.listen(3000,()=>{
    console.log("listing the port 3000")
});