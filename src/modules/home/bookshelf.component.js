import React from 'react';
import Shelf from './shelf.component';
import BookshelfHeader from './bookshelf-header.component';
import * as BooksAPI from '../../data-source/BooksAPI';
import { Link } from 'react-router-dom';
import { SHELFS } from '../common/shelfs.models';

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

  render() {
    return (
      <div>
        <BookshelfHeader />
        <div className="bookshelf-content">
          {Object.keys(SHELFS).map((shelf, index) => (
            <Shelf key={index} shelf={SHELFS[shelf]} updateCallback={this.getBooks.bind(this)}
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
