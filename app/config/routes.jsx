import React from 'react';
import SuperNav from '../components/SuperNav.jsx';
import Home from '../components/Home.jsx';
import Results from '../components/Results.jsx';
import { Route, IndexRoute } from 'react-router';
var BOOKS = require('../../data/books_three');
var getBooks = require('../../results')
var books = getBooks(BOOKS);

module.exports = (
  <Route path='/' component={SuperNav}>
    <Route path='/books' component={Results} books={books}/>
    <IndexRoute component={Home} />
  </Route>
)
