const express = require('express');
const path = require('path');
const router =express.Router();
const rootDir = require('../util/path')

router.use('/add-product',(req, res, next)=>{
  res.sendFile(path.join(rootDir,'views','add-product.html'))
  
});
router.post('/products',(req, res, next) => {
     console.log("another middleware called",req.body);
 res.redirect("/user")
   next();
   });

module.exports= router;