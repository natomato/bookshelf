import {Map, List, fromJS} from 'immutable';
//Functions to convert gbook results to usable book list

//extract a list of books from results
//pass each book to a build function


export function extractBook (item) {
  return fromJS({
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