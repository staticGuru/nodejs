// const http = require("http");

const express = require("express");
var bodyParser = require('body-parser')
const adminRoutes =require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',(req, res, next) => {
  // res.send("<h1>Response from the / page</h1>")
  next();
});
app.use(shopRoutes)
app.use(adminRoutes);


app.listen(3000);
