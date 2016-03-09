var getBooks = require('../results');
var BOOKS = require('../data/books_three');
var BOOK = require('./data/book');
var Book = require('../Book');
var ReactDOMServer = require('react-dom/server');
var BookRow = require('../views/BookRow');
var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var b = new Book();
  res.render('index', { name: 'books' });
  // res.send(200, 'Search');
});

router.get('/book', function(req, res, next) {
  // var author = req.query.author;
  // var books = getBooks(BOOKS)
  var markup = ReactDOMServer.renderToString(<BookRow book={BOOK}/>);
  console.log(markup);
  res.render('results', {markup: markup});
});

module.exports = router;
