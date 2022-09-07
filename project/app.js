const http = require("http");

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware called");
  next();
});
app.use((req, res, next) => {
  console.log("another middleware called");
  res.send("<h1>Response from the middleware</h1>")
});
const server = http.createServer(app);

server.listen(3000);
