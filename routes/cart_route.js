const express=require('express');
const router=express.Router();
const Cart=require('../models/cart_model');
const auth=require('../middleware/auth');

router.get('/cart/', 
auth.verifyUser, 
function(req, res){
    Cart.find({user : req.user._id }).populate("product").exec(function(err, carts){
        if(err){
            return res.status(500).json({
                success : false,
                message : err.message
            })
        }


        return res.status(200).json({
            success : true,
            message : "Cart Items",
            data : carts
        })
    })
})


router.delete('/cart/:id', auth.verifyUser, function(req, res){
    Cart.deleteOne({_id : req.params.id})
    .then(data=>{
        return res.status(200).json({
            success : true,
            message : "Cart Items",
            data : data
        })
    })
    .catch(err=>{
            return res.status(500).json({
                success : false,
                message : err.message
            })
        })
})

module.exports=router;