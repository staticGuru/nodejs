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
          console.log("requeskljlj",res)
     }
});

server.listen(3000,()=>{console.log("Server started successfully!!!")})