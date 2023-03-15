const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const { SecondStep, UpdateDefaultCoin, Wallet,LastStep, SingleUser, UserPro, DefaultCoin} = require('../controller/profileController')

// require auth for all route
router.use(requireAuth)

router.get('/', SingleUser)
router.get('/pro', UserPro)
router.get ('/wallet', Wallet)
router.get ('/default-coin', DefaultCoin)

//  Update  default coin
router.post ('/default-coin', UpdateDefaultCoin)

//..added 
router.post('/second-step', SecondStep)
router.post('/last-step', LastStep)

module.exports = router