
const defaultSubs = [
    {
        name: "talla",
        description: "test",
        price: 120,
        duration:1
    },
    {
        name: "talla2",
        description: "test",
        price: 120,
        duration:2
    }
]

const MSub = require("../models/subscription")

const initSubscriptions = async ()=>{
    const subscriptions = await MSub.find()
    if (subscriptions.length == 0){
        MSub.insertMany(defaultSubs)
    }
}

module.exports = initSubscriptions