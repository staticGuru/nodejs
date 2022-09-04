const http = require('http');

const server = http.createServer((req, res) => {
     console.log(req.url);
     if(req.url==='/') {
          res.setHeader('Content-Type', 'text/html');
          res.write('<html>');
          res.write('<head><title>form page</title><head>');
          res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
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
});

server.listen(3000,()=>{console.log("Server started successfully!!!")})