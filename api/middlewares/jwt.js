const jwt = require('jsonwebtoken');
const MUser = require('../models/user');

const jwtMiddleware = (req,res,next)=>{
    let token ;
    if(typeof req.headers['authorization'] !== 'undefined'){
        token = req.headers['authorization'].startsWith("Bearer ") ? req.headers['authorization'].split('Bearer ') : req.headers['authorization'] 
    }else{
        return res.status(401).send({error: "you must be logged in "})
    }

    jwt.verify(token,process.env.JWTSECTRET,async (err,payload)=>{
        if(err){
        return res.status(401).send({error: "you must be logged in "})
        }
        const user = await MUser.findById(payload._id)
        if(!user) {
        return res.status(401).send({error: "you must be logged in "})
        }
        req.user = user
        next()
    })
}

module.exports = jwtMiddleware