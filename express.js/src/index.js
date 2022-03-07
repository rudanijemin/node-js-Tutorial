const path = require("path");
const express = require("express");
const app = express();
const hbs =require("hbs");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


//set view engine
app.set("view engine","hbs");
app.set("views",templatePath);

hbs.registerPartials(partialsPath); 

//bulitin middleware
// app.use(express.static(staticPath));

app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/",(req,res)=>{
    res.send("hello word .. ",{
        chanelName: "je",
    });
    
});
app.get("/about",(req,res)=>{
    res.send("about page .. ");
});

app.get("*",(req,res)=>{
    res.render("404",{
        errorComent: "Opps page could not be fount",

    })

})

app.listen(8000,()=>{
    console.log("listing the port 8000")
});