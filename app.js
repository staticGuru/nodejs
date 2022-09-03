const http=require('http');
http.createServer((req,res) => {
     console.log("request sections",req);
     process.exit();
}).listen(3000);