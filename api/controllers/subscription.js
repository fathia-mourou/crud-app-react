const MSub = require('../models/subscription')

const getAllSubscriptions =async  (req,res)=>{
    const subscriptions = await MSub.find()
    res.send({
        subscriptions
    })
}


module.exports={
    getAllSubscriptions
}