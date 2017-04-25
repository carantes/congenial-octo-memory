const express = require('express')
const router = express.Router()
const modules = require('../modules')

// Headers

// Static files
router.use('/', express.static(__dirname + '/../public'));

// APIs
router.use('/api', modules);

// Not found
router.use(function (req, res, next) {  
  var err = new Error('Route Not found')
  err.status = '404'
  next(err)
})

module.exports = router