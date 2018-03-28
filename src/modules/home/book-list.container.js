import React from 'react';
import * as BooksAPI from '../../data-source/BooksAPI';
import BookshelfHeader from './bookshelf-header.component';
import Bookshelf from './bookshelf.component';
import { Link } from 'react-router-dom';

import '../../assets/styles/bookshelf.css';
import '../../App.css';

class BookList extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    return (
      <div>
        <BookshelfHeader />
        <div className="bookshelf-content">
          <Bookshelf books={this.state.books} />
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

export default BookList;
