const path = require("path");
const express = require("express");

const app = express();


const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates");


//set view engine
app.set("view engine","hbs");
app.set("views",templatePath);

//bulitin middleware
// app.use(express.static(staticPath));

app.get("",(req,res)=>{
    res.render("index");
});
app.get("/",(req,res)=>{
    res.send("hello word .. ");
});
app.get("/about",(req,res)=>{
    res.send("about page .. ");
});


app.listen(8000,()=>{
    console.log("listing the port 8000")
});