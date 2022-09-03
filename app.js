const http=require('http');
const fs=require('fs');
http.createServer((req,res) => {
     const url= req.url;
     if(url == '/'){
res.write("<html><body><form action'/messages' method='post' enctype='multipart/form'><input type='text'/><input type='submit'/></form></html>");
return res.end();
     }
     if(url=='/messages'){
      fs.writeFileSync('sample.txt',url);
      res.statusCode=302;
      res.setHeader('Location','/');
      return res.end();

     }
  
}).listen(3000,()=>console.log("Server started successfully"));