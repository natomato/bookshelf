var Book = require('../Book');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var b = new Book();
  // res.render('index', { title: 'Express' });
  res.send(200, 'Search');
});

router.get('/book', function(req, res, next) {
  var author = req.query.author;
  var b = new Book();
  res.render('results', {author: author, book: b.manybooks});
});

module.exports = router;
