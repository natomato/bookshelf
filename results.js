var Immutable = require('immutable');

function extractBook (item) {
  return Immutable.fromJS({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    publishedDate: item.volumeInfo.publishedDate,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    description: item.volumeInfo.description,
    pageCount: item.volumeInfo.pageCount,
    industryIdentifiers: item.volumeInfo.industryIdentifiers
  });
}

module.exports = function getBooks (results) {
  return Immutable.List(results.items.map(item => extractBook(item)));
  // return Immutable.Map(results.items.map(item => {
  //     let book = extractBook(item);
  //     return [book.id, book]
  //   }));
}
