//creating an sdk

var rp = require('request-promise');
var _ = require('lodash/fp');
var SAMPLE = require('./data/BOOKS');
var aBook = require('./data/one_book');
var manybooks = require('./data/three_books');

var Book = function () {
  console.log('book created', Object.keys(this));
  this.SAMPLE = SAMPLE;
  this.manybooks = manybooks;
};

// const repl = require('repl');
// repl.start('> ').context.lodash = _;
// repl.context.getData = getData;
// repl.context.processCol = processCol;

var options = {
  uri: 'https://www.googleapis.com/books/v1/volumes',
  qs: {
    q: 'dougie'
  },
  json: true
}

// rp(options)
//     .then(function (volumes) {
//         console.log(processCollection(3, volumes.items));

//     })
//     .catch(function (err) {
//         // API call failed...
//         console.log('call failed');
//     });


Book.prototype.processCollection = function (limit, volumes) {
  var volumes = volumes || manybooks;
  return _.chain(volumes)
    .take(limit)
    .map(this.getModel)
    .value();
}

//Book Model
Book.prototype.getModel = function (item) {
  //Maps google book result to a Model
  return {
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    publishedDate: item.volumeInfo.publishedDate,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    description: item.volumeInfo.description,
    pageCount: item.volumeInfo.pageCount,
    libraryIdentifiers: item.volumeInfo.industryIdentifiers
  }
}

//create a testing framework
//mocha / chai / chai-as-promised

// fetch books
// https://www.googleapis.com/books/v1/volumes?q=
// Industry Identifiers (ISBN)
// get thumbnail



// not necessary to get the BOOK from a single book
// google ID, then GET: https://www.googleapis.com/books/v1/volumes/{id}

module.exports = Book;
