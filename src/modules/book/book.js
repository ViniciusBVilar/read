import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from '../../models/shelfs.model';
import BookInfo from './components/book-info';
import Dropdown from './components/dropdown';
import Image from './components/image';
import * as BooksAPI from '../../data-source/BooksAPI';
import '../../assets/styles/book.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  };

  update = (shelf) => {
    const bookId = this.props.book.id;
    BooksAPI.update({ id: bookId }, shelf)
    .then((books) => this.props.updateCallback())
    .then(() => this.updateCheck(bookId, shelf))
    .then(() => this.props.book['shelf'] = shelf);
  }

  updateCheck = (bookId, shelf) => {
    const currentlyBookshelf = this.props.book.shelf ? this.props.book.shelf : 'none';
    document.getElementById(`${bookId}${shelf}`) &&
      (document.getElementById(`${bookId}${shelf}`).textContent = `✓ ${SHELFS[shelf]}`);
    currentlyBookshelf !== shelf && document.getElementById(`${bookId}${currentlyBookshelf}`) &&
      (document.getElementById(`${bookId}${currentlyBookshelf}`).textContent = `${SHELFS[currentlyBookshelf]}`);
  }

  render() {
    const book = this.props.book ? this.props.book : {};
    return (
      <div className="book">
        <Image src={book.imageLinks &&
          book.imageLinks.smallThumbnail}
        alt="Book cover"
        />
        <Dropdown book={book} updateCallback={this.update.bind(this)} />
        <BookInfo book={book} />
      </div>
    );
  }
}

export default Book;
