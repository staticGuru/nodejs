const http=require('http');
http.createServer((req,res) => {
     console.log("request sections",req);
}).listen(2022);