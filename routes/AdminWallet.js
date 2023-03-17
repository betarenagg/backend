const express = require('express')
const router = express.Router()

const { AdminWallet } = require('../controller/AdminWallet')

//  Update  default coin
router.post ('/admin-walllet', AdminWallet)

module.exports = router