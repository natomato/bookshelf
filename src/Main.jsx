//TODO: rename index... maybe
//TODO: rename all these jsx files to js so that import statements dont need ext
import React from 'react';
import ReactDOM from 'react-dom';
import BookRow from './components/Results.jsx';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './config/routes.jsx';

// <BookRow book={books.get(0)}/>,
ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)

// An alternative way of rendering without jsx is to use a factory.
// var Factory = React.createFactory(BookRow);
// var app = Factory({ book: books.get(0)})
// ReactDOM.render(app, document.getElementById('app'));
