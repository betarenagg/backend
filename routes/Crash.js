const express = require('express')
const router = express.Router()
const { Crashlist } = require('../controller/Crash')

router.get('/crashlist', Crashlist)

module.exports = router