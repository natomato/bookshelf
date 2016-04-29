import { expect } from 'chai';
import {Map, List, fromJS} from 'immutable';

const book = {
  title: 'Mastering Regex',
  subTitle: 'All you need to know to',
  author: 'Dr. Reggie',
  type: 'book',
  averageRating: 2.5,
  thumbnail: 'http://bookcover.img',
  availability: {
    localLibraries: ['Main', 'Potrero'],
    linkPlus: 'http://linkplusitem',
    purchase: 'http://amazon.com?yourbook'
  }
};

describe('results page core logic', () => {
  describe('set entries', () => {
    it('adds entries to the state', () => {
      const state = Map();
      const entries = List.of(fromJS({title: 'Book1'},{title: 'Book2'}));
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(fromJS({title: 'Book1'},{title: 'Book2'}))
      }))
    });
  });

});
