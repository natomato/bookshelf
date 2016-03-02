var Book = require('../Book');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var b = new Book();
  // res.render('index', { title: 'Express' });
  res.send(200, 'Search');
});

module.exports = router;
