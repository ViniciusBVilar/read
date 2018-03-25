import React from 'react';
import Shelf from './shelf.component';
import BookshelfHeader from './bookshelf-header.component';
import * as BooksAPI from '../../data-source/BooksAPI';
import { Link } from 'react-router-dom';

import '../../assets/styles/bookshelf.css';
import '../../App.css';

class Bookshelf extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  shelfs = ['currentlyReading', 'wantToRead', 'read'];

  render() {
    return (
      <div>
        <BookshelfHeader />
        <div className="bookshelf-content">
          {this.shelfs.map((shelf, index) => (
            <Shelf key={index} shelf={shelf} updateCallback={this.getBooks.bind(this)}
              shelfbooks={this.state.books.filter((book) => book.shelf === shelf)} />
          ))}
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="bookshelf-search"
          >Search</Link>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
