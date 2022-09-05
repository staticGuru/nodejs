const http = require('http');

const server = http.createServer((req, res) => {
     console.log(req.url);
     if(req.url==='/') {
          res.setHeader('Content-Type', 'text/html');
          res.write('<html>');
          res.write('<head><title>form page</title><head>');
          res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
          res.write('<head><title>Enter Message</title><head>');
          res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
          );
          res.write('</html>');
     
        
         return res.end();

     }
     if(req.url =='/users'){
          res.setHeader('Content-Type', 'text/html');
          res.write('<ul>');
          res.write('<head><title>Users list page</title><head>');
          res.write('<li><h1>user1</h1></li>');
          res.write('</ul>');
          return res.end();
     }
     if(req.url =='/create-user'){
          const body=[];
          req.on('data',(chunk) =>{
               body.push(chunk);
          });
          req.on('end',()=>{
               const parsedBody= Buffer.concat(body).toString();
               console.log("parsedbody",parsedBody.split('=')[1])
          });
          res.statusCode=302;
          res.setHeader('Location','/users');
          return res.end();
     }
});

server.listen(3000,()=>{console.log("Server started successfully!!!")})