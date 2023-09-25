const express= require('express')
const {addSubscription,deleteSubscription, updateSubscription } = require('../controllers/user')
const router = express.Router()
const jwtMiddleware = require('../middlewares/jwt')

router.post('/subscribe',jwtMiddleware, addSubscription)
router.put('/subscription',jwtMiddleware,deleteSubscription)
router.put('/sub',jwtMiddleware,updateSubscription)


module.exports = router