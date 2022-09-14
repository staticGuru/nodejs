// const http = require("http");

const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')
const adminRoutes =require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',(req, res, next) => {
  // res.send("<h1>Response from the / page</h1>")
  next();
});
app.set('view engine','pug');
app.set('views','views');

app.use(shopRoutes)
app.use('/admin',adminRoutes);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);
