const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const routePrinter = require('@aymen3009/express-print-routes')
dotenv.config()
const app = express()
mongoose.connect(process.env.DB_DOCKER).then(async()=>{
    console.log("Connected to MongoDB")
    await initSubscriptions()
}).catch((er)=>{
    console.error(`Error connecting to database: ${er}`)
    process.exit(69)
})
const PublicRouter = require('./routes/public')
const privateRoute = require ('./routes/private')
const initSubscriptions = require('./helpers/initSubscriptions')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/api',PublicRouter)
app.use('/api', privateRoute)

routePrinter(app)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
