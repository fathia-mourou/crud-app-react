
const defaultSubs = [
    {
        name: "Swi3a",
        description: "Got something quick to do? You can sit back and finish it.",
        price: 3.500,
        duration:1
    },
    {
        name: "Talla",
        description: "Ideal if you're visiting Djerba and looking for a place to work.",
        price: 22.000,
        duration:1
    },
    {
        name: "Chelouech",
        description: "You have 7 days a month to choose from.",
        price: 90.000,
        duration:7
    },
    {
        name: "Weld eddar",
        description: "Set up from Monday to Friday. Share and develop with startups, freelancers and NGOs.",
        price: 200.000,
        duration:30
    },
    {
        name: "Grant",
        description: "Ne offer you a 30% discount if you are: a pupil, student or volunteer/intern.",
        price: 10.000,
        duration:7
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