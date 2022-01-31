const fs = require("fs");
//addfile Asyncs
//fs.writeFile("fsAsync/read.txt","to day is awesome",(err) => {
  //console.log("file compplated");
    //console.log(err);
//});

//append
//fs.appendFile("fsAsync/read.txt","today i am learn node js",(err)=>{
  //  console.log(err);
//});

//readfile
fs.readFile("fsAsync/read.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log("file created");
});