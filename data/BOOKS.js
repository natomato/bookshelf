var one_book = require('./one_book');
var three_books = require('./three_books');

var BOOK = {};

BOOK.one = function () {
  return one_book;
}

// can i make this not a function?
BOOK.many = function () {
  return three_books;
}

exports.BOOK;