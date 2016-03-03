var express = require('express');
var Namer = require('../name-db');
var router = express.Router();

/* GET greetings listing. */
router.get('/:size', function(req, res, next) {
  var size = req.params;
  res.render('greetings', {names: Namer.getRandomNames(size)});
});

module.exports = router;
