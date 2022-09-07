// const http = require("http");

const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',(req, res, next) => {
  // res.send("<h1>Response from the / page</h1>")
  next();
});
app.use('/add-product',(req, res, next)=>{
  res.write(
    '<body><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
});
app.post('/users',(req, res, next) => {
  console.log("another middleware called",req.body);
res.redirect("/user")
});
app.use('/user',(req, res, next) => {
  console.log("another middleware called");
  res.send("<h1>Response from user middleware</h1>")
});
// const server = http.createServer(app);

app.listen(3000);
