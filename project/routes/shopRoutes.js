const express = require('express');
const router =express.Router();

router.get('/user',(req, res, next) => {
     console.log("another middleware called");
     res.send("<h1>Response from user middleware</h1>")
   });
module.exports =router;