const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const { SecondStep, Wallet,LastStep, SingleUser, UserPro} = require('../controller/profileController')

// require auth for all route
router.use(requireAuth)

router.get('/', SingleUser)
router.get('/pro', UserPro)
router.get ('/wallet', Wallet)

//..added 
router.post('/second-step', SecondStep)
router.post('/last-step', LastStep)

module.exports = router