const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema
const Modal = mongoose.model

const userSchema = new Schema({
    firstName : {
        type : String,
        required: true,
        trim : true
    },
    lastName : {
        type : String,
        required:true,
        trim : true
    },
    email:{
        type :String ,
        required:true,
        unique : true
    },
    password:{
        type : String,
        required:true,
        select:false
    },
    phone:{
        type : String
    },
    subscriptions:[{
        subscription:{
            type: Schema.Types.ObjectId,
            ref:"Subscription",
            autoPopulate : true
        },
        startDate: {
            type: Date,
            required : true
        },
        endDate:{
            type:Date,
            required:true
        }
    }],

},{
    timestamps : true
})

userSchema.plugin(require('mongoose-autopopulate'))
userSchema.pre('save',async function(next){
    const user = this
    if(!user.isModified('password')){
        return next()
    }
    const hashedPassword = await bcrypt.hash(user.password,10)
    user.password = hashedPassword
    next()
})
const MUser= mongoose.model("User" , userSchema);
module.exports= MUser