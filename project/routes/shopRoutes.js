const express = require('express');
const path = require('path');
const router =express.Router();
const rootDir = require('../util/path')

router.get('/user',(req, res, next) => {
     console.log("another middleware called");
     res.sendFile(path.join(rootDir,'views','shop.html'))
   });
module.exports =router;