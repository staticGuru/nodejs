const http=require('http');
http.createServer((req,res) => {
     console.log("request sections",req.url,req.headers);
}).listen(3000,()=>console.log("Server started successfully"));