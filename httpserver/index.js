const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url == "/"){
        res.end("hello from home page");
    }
    else if(req.url == "/about"){
        res.end("hello from about page");
    }
    else if(req.url == "/contact"){
        res.end("hello from contact page");
    }
    else if(req.url == "/userapi"){
        fs.readFile('${__dirname}/userapi/userapi.json',"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
        });
        
    }
    else {
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("404 error page does not exit");
    }
});
server.listen(8000 , "127.0.0.1",()=>{
    console.log("listing to port no 8000");
});