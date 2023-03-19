const express = require('express')
const router = express.Router()

const { AdminWallet, GetWallet } = require('../controller/AdminWallet')

//  Update  default coin
router.post ('/admin-walllet', AdminWallet)
router.get ('/get-wallet', GetWallet)

module.exports = router