//create folder
const fs = require("fs");
//fs.mkdirSync("rudani");


//create bio and data imform
//fs.writeFileSync("rudani/bio.txt","node js is most popular"); 

//read file without buffder
//utf-8 is file encoding .it is compalusary read file without buffer
//const data = fs.readFileSync("rudani/bio.txt","utf-8");
//console.log(data);
//fs.renameSync("rudani/bio.txt","rudani/mybio.txt");

//delete file
//fs.unlinkSync("rudani/mybio.txt"

//detele folder
fs.rmdirSync("rudani");