const jwt = require('jsonwebtoken');
const User = require('../models/user_model');


module.exports.verifyUser = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const data = jwt.verify(token, 'anysecretkey');
        console.log(data)
        
        //in this data id is available
        User.findOne({_id : data.userID})
        .then(function(userData){
            req.user = userData
            next()
        })
        .catch(function(e){
            console.log("inside try")
            res.status(401).json({error : e})
            
        })  
    }
    catch(e){
        console.log("no try")
        res.status(401).json({error : e})
        
    }    
}