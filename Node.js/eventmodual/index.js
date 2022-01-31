//Events modual
//create,fire,listen for your own events

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayname",()=>{     //event lisen
    console.log("may name is jemin");     
});

event.on("sayname",()=>{     //event lisen
    console.log("may name is rudani");     
});
event.emit("sayname");    //event call