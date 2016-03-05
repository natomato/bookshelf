import {expect} from 'chai';
import Immutable from 'immutable';
import GOOGLE_BOOK from '../data/book';
import {extractBook} from '../results';

describe('A book', () => {
  describe('extractBook', () => {
    it.only('should extract the basic details of a book', () => {
      expect(extractBook(GOOGLE_BOOK)).to.equal(Immutable.fromJS({
        "id": '-O3r6D1KutAC',
        "title": "Pattern Recognition",
        "authors": ["William Gibson"],
        "publishedDate": "2003-02-03",
        "description": "The accolades and acclaim are endless for William Gibson's coast-to-coast bestseller. Set in the post-9/11 present, Pattern Recognition is the story of one woman's never-ending search for the now.",
        "thumbnail": "http://books.google.com/books/content?id=-O3r6D1KutAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "pageCount": 384,
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1101146419"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781101146415"
          }
        ]
      }));
    });
  });
});