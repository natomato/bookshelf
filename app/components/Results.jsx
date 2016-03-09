var React = require('react');
var ReactDOM = require('react-dom');
var BOOKS = require('../../data/books_one');
var getBooks = require('../../results')
var books = getBooks(BOOKS);


class BookList extends React.Component {
  render() {
    return (
      <ul>
        Results
        {this.props.route.books.map(book => {
          return <BookRow key={book.get('id')} book={book} />;
        })}
      </ul>
    );
  }
}


class BookRow extends React.Component {
  render() {
    let title = this.props.book.get('title');
    let description = this.props.book.get('description');
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
};

module.exports = BookList;
