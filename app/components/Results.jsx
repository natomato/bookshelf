var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange () {
    this.props.onUserInput(
      this.refs.searchBar.value,
      this.refs.localFilter.checked
    )
  }
  render() {
    return (
      <form>
        <input type='text'
          placeholder='Search...'
          value={this.props.query}
          ref='searchBar'
          onChange={this.handleChange} />
        <p>
          <input type='checkbox'
            ref='localFilter'
            onChange={this.handleChange}
            checked={this.props.localLibraryOnly} />
          Only show books available at this library
        </p>
      </form>
    );
  }
}

class BookList extends React.Component {
  render() {
    return (
      <ul>
        Results
        {this.props.books.filter(book => {
          if (this.props.localLibraryOnly) {
            return book.get('location') === 'local';
          } else {
            return true;
          }
        }).map(book => {
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
}

class SearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: 'gibson',
      localLibraryOnly: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (query, localLibraryOnly) {
    this.setState({
      query: query,
      localLibraryOnly: localLibraryOnly
    });
  }
  render () {
    let books = this.props.route.books;
    return (
      <div>
        <SearchBar
          query={this.state.query}
          localLibraryOnly={this.state.localLibraryOnly}
          onUserInput={this.handleChange}
        />
        <BookList
          books={books}
          query={this.state.query}
          localLibraryOnly={this.state.localLibraryOnly}
        />
      </div>
    )
  }
}

module.exports = SearchResults;
