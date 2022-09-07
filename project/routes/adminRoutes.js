const express = require('express');
const router =express.Router();

router.use('/add-product',(req, res, next)=>{
     res.write(
       '<body><form action="/products" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
     );
});
router.post('/products',(req, res, next) => {
     console.log("another middleware called",req.body);
//  res.redirect("/user")
   next();
   });

module.exports= router;