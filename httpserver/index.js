const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("hello from the  other new side");
});

server.listen(8000 , "127.0.0.1",()=>{
    console.log("listing to port no 8000");
});