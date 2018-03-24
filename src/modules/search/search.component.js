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
    books: []
  }

  shelfs = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  search(category) {
    debugger;
    BooksAPI.search(category).then((books) => this.setState({ books }));
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => books.map((book) => this.shelfs[book.shelf].push(book)))
      .then(() => this.setState({ shelfs: this.shelfs }));
  }

  renderBook(book, index) {
    this.state.shelfs &&
      Object.keys(this.state.shelfs).map((shelf) => this.state.shelfs[shelf].map(
        (b) => { book.id === b.id && (book['shelf'] = b.shelf)}
      ))

    return (
      <div className='search-books-results' key={index}>
        <Book book={book}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <SearchHeader search={this.search}/>
        <div className='bookshelf-content'>
          {this.state.books.map((book, index) => this.renderBook(book, index))}
        </div>
      </div>
    );
  }
}

export default SearchList;
