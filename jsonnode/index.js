const fs = require("fs");

const biodate ={
    name: "vinod",
    age: "20",
    collage: "LJIET",
};

//object convert into json file
//const jasondate = JSON.stringify(biodate);
//console.log(jasondate);

//another file add
const jasondate =JSON.stringify(biodate);
fs.writeFile("j1.json", jasondate, (err)=>{
    console.log("done");
});

fs.readFile("j1.json","utf-8",(err,data)=>{
    const ordate =JSON.parse(data);
    console.log(data);
    console.log(ordate);
});