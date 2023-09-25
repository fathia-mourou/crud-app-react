const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Modal =mongoose.model

const subscriptionSchema = new Schema({
    name : {
        type: String,
        trim:true,
        required:true
    },
    description : {
        type: String,
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    }
})

const MSub = Modal('Subscription',subscriptionSchema)

module.exports = MSub