const MUser = require('../models/user')
const MSub = require('../models/subscription')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const addDays = require('../helpers/addDays')
const compareDates = require('../helpers/compareDate')

const register = async (req,res)=>{

    const { firstName, lastName , phone, email, password } = req.body
    const user = await MUser.findOne({email})
    if(user){
     return   res.status(401).json({message : 'email already used'})
    }
    const newUser = new MUser({
        firstName:firstName,
        lastName:lastName,
        phone:phone,
        email:email,
        password:password
    })
    const savedUser = await newUser.save()
    const token = jwt.sign({_id:savedUser._id},process.env.JWTSECTRET)
    res.status(201).json({
        user:savedUser,
        token
    })


}
const login = async (req,res)=>{

    const {email,password} = req.body
    const user = await MUser.findOne({email}).select('+password')
    if(!user){
        return  res.status(403).send("invalid credentials")
    }
    const valid = await bcrypt.compare(password,user.password)
    if(!valid){
        return  res.status(403).send("invalid credentials")
    }
    const token = jwt.sign({_id: user._id},process.env.JWTSECTRET)
    return    res.status(200).json({
        user,
        token
        })
    
    }

const addSubscription = async (req,res)=>{
    const {subscriptionId, startDate} = req.body
    const subscription = await MSub.findOne({_id:subscriptionId})
    if (!subscription){
        return     res.status(401).json({error:"no such subscription"})
    }
const user=await MUser.findById(req.user._id)
user.subscriptions.push({
    subscription:subscriptionId,
    startDate: new Date (startDate),
    endDate: addDays(startDate,subscription.duration)
})

const savedUser = await user.save()
res.send ({
    user: savedUser
})

}

const deleteSubscription = async (req,res)=>{
    const {subId} = req.body
    const user = await MUser.findOneAndUpdate({_id:req.user._id},{
        $pull:{ subscriptions :{ _id: subId}}
    },{
        new:true
    })
    res.status(201).send({
        user
    })
}

const updateSubscription = async (req,res)=>{
    const {subId, startDate} = req.body
    const user= await MUser.findById(req.user._id).populate("subscriptions.subscription")
    user.subscriptions.forEach(async (item)=>{
        if( item._id.toString() == subId ){
            const today = new Date()
           if (compareDates(today, item.startDate) == -1){
            const newStartDate = new Date (startDate)
            const newEndDate = addDays(startDate,user.subscriptions.subscription.duration)
            console.log(user,newEndDate);
            item.startDate = newStartDate
            item.endDate = newEndDate
           
           } 
           else {
            return res.status(402).send({
                message:'you can not change the start date of this subscription'
            })
           }

        }
    })

    const updatedUser =await user.save()
    return  res.status(201).send({user:updatedUser});

}



module.exports = {
    register,
    login,
    addSubscription,
    deleteSubscription,
    updateSubscription
}