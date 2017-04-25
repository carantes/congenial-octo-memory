var express = require('express');
var router = express.Router();

var user = require('./user');

router.get('/:username', user.getUserRepos.bind(user));

module.exports = router;
