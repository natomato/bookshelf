import React from 'react';
import SuperNav from '../components/SuperNav.jsx';
import Home from '../components/Home.jsx';
import Results from '../components/Results.jsx';
import { Route, IndexRoute } from 'react-router';
import { List, fromJS } from 'immutable';
var books = fromJS([
  {title: 'Big Book', description: 'a book about lots of things', id: '123', location: 'remote'},
  {title: 'Diepnosophy', description: 'talking to humans', id: '234', location: 'local'},
  {title: 'Exploring Parallel Universes with Marios', description: 'an A press is an A press', id: '345', location: 'local'}
]);

module.exports = (
  <Route path='/' component={SuperNav}>
    <Route path='/books' component={Results} books={books}/>
    <IndexRoute component={Home} />
  </Route>
)
