const express=require('express')
const router=express.Router();

const Contact=require('../models/contact_models')
const {check,validationResult}=require('express-validator')

router.post('/insert/contact',function(req,res){
    const email=req.body.email;
    const help=req.body.help;
    
        const me=new Contact({email:email,help:help})
        me.save().then(function(){
            res.send("message added")
            console.log("message Added")  
        })
})

module.exports= router;