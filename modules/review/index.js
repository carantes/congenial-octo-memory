var express = require('express');
var router = express.Router();

var review = require('./review');

router.get('/:username', review.consultar.bind(review));
router.put('/', review.gravar.bind(review));

module.exports = router;