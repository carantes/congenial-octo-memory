const express = require('express')
const router = express.Router()

//Include modules
router.use('/user', require('./user'))
router.use('/review', require('./review'))

module.exports = router