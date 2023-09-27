const express= require('express')
const {addSubscription,deleteSubscription, updateSubscription,getProfile } = require('../controllers/user')
const router = express.Router()
const jwtMiddleware = require('../middlewares/jwt')

router.post('/subscribe',jwtMiddleware, addSubscription)
router.put('/subscription',jwtMiddleware,deleteSubscription)
router.put('/sub',jwtMiddleware,updateSubscription)
router.get('/me',jwtMiddleware,getProfile)


module.exports = router