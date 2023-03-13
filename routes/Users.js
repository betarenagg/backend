const express = require('express')
const router = express.Router()

const {  Login, CreateAccount} = require('../controller/userController')

router.post ('/login', Login)
router.post ('/signup', CreateAccount)

module.exports = router