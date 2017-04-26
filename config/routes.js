const express = require('express')
const router = express.Router()
const modules = require('../modules')

// Headers

// APIs
router.use('/', modules);

// Not found
router.use(function (req, res, next) {  
  var err = new Error('Route Not found')
  err.status = '404'
  next(err)
})

module.exports = router