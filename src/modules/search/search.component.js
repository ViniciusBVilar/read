import React from 'react';
import * as BooksAPI from '../../data-source/BooksAPI';
import Book from '../common/book.component';
import SearchHeader from './search-header.component';
import '../../assets/styles/bookshelf.css';
import '../../assets/styles/search.css';

class SearchList extends React.Component {

  state = {
    shelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    category: '',
    books: [],
    error: ''
  }

  shelfs = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  search = (category) => {
    BooksAPI.search(category).then((books) => books && books.error ?
      this.setState({ category, error: books.error, books: [] }) :
      this.setState({ category, books , error: ''}));
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => books.map((book) => this.shelfs[book.shelf].push(book)))
      .then(() => this.setState({ shelfs: this.shelfs }));
  }

  renderBook(book, index) {
    this.state.shelfs &&
      Object.keys(this.state.shelfs).map((shelf) => this.state.shelfs[shelf].forEach(
        (b) => book.id === b.id && (book['shelf'] = b.shelf)
      ));

    return (
      <Book key={index} book={book} updateCallback={() => { }} />
    );
  }

  render() {
    const { category, books, error } = this.state
    return (
      <div className="shelf">
        <SearchHeader search={this.search.bind(this)} />
        <div className="shelf-books">
          <h2>{category}</h2>
          <div className="shelf-grid">
            {(books && !error) &&
              books.map((book, index) => this.renderBook(book, index))}
            {(error && books.length <= 0) && <h1>{error}</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
