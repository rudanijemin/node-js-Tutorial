const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ttchenal")
.then(()=>console.log("connection succesful"))
.catch((err)=>console.log(err));

