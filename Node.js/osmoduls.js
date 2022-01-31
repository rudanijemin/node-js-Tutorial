const os = require("os");
console.log(os.arch());
console.log(os.type());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());

const freememory = os.freemem();
console.log('${freememory /1024/1024/1024}');

const totalmem = os.totalmem();
console.log('${totalmem /1024/1024/1024}');

