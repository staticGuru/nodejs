const express = require('express');
const path = require('path');
const router =express.Router();

router.get('/user',(req, res, next) => {
     console.log("another middleware called");
     res.sendFile(path.join(__dirname,'../','views','shop.html'))
   });
module.exports =router;