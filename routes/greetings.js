var express = require('express');
var Namer = require('../name-db');
var router = express.Router();

/* GET greetings listing. */
router.get('/', function(req, res, next) {
  res.render('greetings', {names: Namer.getRandomNames(3)});
});

module.exports = router;
