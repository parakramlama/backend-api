const express=require('express');
const router=express.Router();
const Product=require('../models/product_model');
const{check, validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')

router.post('/product/insert', 
auth.verifyUser, 
auth.verifyAdmin,
upload.single('product_img'),[
    check('product_name','Username is required').not().isEmpty(),
    check('product_price','Price is required').not().isEmpty(),
    // check('product_img','Image is required').not().isEmpty(),
],function(req,res){
    if(req.file==undefined){
        return res.status(400).json({
            message: "Invalid file format" 
        })
    }
    console.log(req.file)
    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        const product_name=req.body.product_name;
        const product_price= req.body.product_price;
        const product_desc=req.body.product_desc;
        const path = req.file.path;
        console.log(path)
        const product=new Product(
        {
            product_name:product_name,
            product_price:product_price,
            product_desc:product_desc,
            product_img:path

        });
    product.save()
    .then(function(result){
        res.status(201).json({message : "Product Registered Successfully!!"})
    
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })
    }
else{
   // res.send(errors.array())
    res.status(400).json(errors.array());
}   
})


module.exports = router;