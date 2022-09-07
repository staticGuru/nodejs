// const http = require("http");

const express = require("express");
const app = express();

app.use('/',(req, res, next) => {
  console.log("middleware called");
  // res.send("<h1>Response from the / page</h1>")
  next();
});
app.use('/users',(req, res, next) => {
  console.log("another middleware called");
  res.send("<h1>Response from users middleware</h1>")
});
app.use('/user',(req, res, next) => {
  console.log("another middleware called");
  res.send("<h1>Response from user middleware</h1>")
});
// const server = http.createServer(app);

app.listen(3000);
