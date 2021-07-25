const express=require('express');
const router=express.Router();
const Article=require('../models/article_model');
const{check, validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/article/insert',
[
    check('article_title','Title is required').not().isEmpty(),
    check('article_body','Content is required').not().isEmpty(),
],function(req,res){

    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        
        const article_title=req.body.article_title;
        const article_body= req.body.article_body;
            const data=new Article(
                {
                    article_title:article_title,
                    article_body:article_body
                }
            );
            data.save()
            .then(function(result){
                res.status(201).json({message : "Article Added Success!!"})
            
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


module.exports=router;    