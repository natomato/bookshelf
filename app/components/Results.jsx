var React = require('react');
var ReactDOM = require('react-dom');
var BOOKS = require('../../data/books_one');
var getBooks = require('../../results')
var books = getBooks(BOOKS);

var BookRow = React.createClass({
  render: function () {
    // let book = getBooks(BOOKS).get(0);
    console.log(this.props);
    //TODO: looks hacky to pass props in like this. what is a better way?
    var title = this.props.route.book.get('title');
    var description = this.props.route.book.get('description');
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
});

module.exports = BookRow;
