const path = require("path");
const express = require("express");

const app = express();


const staticPath = path.join(__dirname,"../public");

//bulitin middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("hello word .. ");
});
app.get("/about",(req,res)=>{
    res.send("about page .. ");
});

app.listen(8000,()=>{
    console.log("listing the port 8000")
});