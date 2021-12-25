//Sync vs Async

const fs = require("fs");
//fs.writeFileSync("read.txt","ode js is a supper language");

//Sync
//const data = fs.readFileSync("read.txt","utf-8");
//console.log(data);
//console.log("hello ");

//Async
 fs.readFile("read.txt","utf-8",(err,data)=>{
     console.log(data);
});
console.log("hello");
