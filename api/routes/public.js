const express= require('express')
const {register,login } = require('../controllers/user')
const router = express.Router()
const jwtMiddleware = require('../middlewares/jwt')
const { getAllSubscriptions } = require('../controllers/subscription')

router.post('/register',register)
router.post('/login', login)
router.get('/subscriptions', getAllSubscriptions)

module.exports = router