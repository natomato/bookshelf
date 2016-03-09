var React = require('react');
var ReactDOM = require('react-dom');
// var BOOK = require('./data/book');

var BookRow = React.createClass({
  render: function () {
    var title = props.book.title;
    var description = props.book.description;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
});

module.exports = BookRow;

// ReactDOM.render(
//   <BookRow book={BOOK}/>,
//   document.getElementById('results');
// )
