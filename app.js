const http=require('http');
http.createServer((req,res) => {
     console.log("request sections",req.url,req.headers);
     res.setHeader('Content-Type', 'text/html');
     res.write('<html><head><title>Guruvignesh\'s server</title></head><body><p>the node js is running</p></body></html>');
     res.end();
}).listen(3000,()=>console.log("Server started successfully"));