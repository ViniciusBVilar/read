import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from './shelfs.model';
import BookInfo from './book-info';
import Dropdown from './dropdown';
import * as BooksAPI from '../../data-source/BooksAPI';
import '../../assets/styles/book.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  };

  update(shelf) {
    const bookId = this.props.book.id;
    const currentlyBookshelf = this.props.book.shelf ? this.props.book.shelf : 'none';
    BooksAPI.update({ id: bookId }, shelf)
      .then((books) => this.props.updateCallback(books))
      .then(() => this.updateCheck(bookId, currentlyBookshelf, shelf));
  }

  updateCheck(bookId, currentlyBookshelf, shelf) {
    document.getElementById(`${bookId}${shelf}`) &&
      (document.getElementById(`${bookId}${shelf}`).textContent = `✓ ${SHELFS[shelf]}`);
    document.getElementById(`${bookId}${currentlyBookshelf}`) &&
      (document.getElementById(`${bookId}${currentlyBookshelf}`).textContent = `${SHELFS[currentlyBookshelf]}`);
  }

  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <img className="book-cover-img" src={book.imageLinks ?
          book.imageLinks.smallThumbnail :
          /* eslint no-undef: 0 */
          require("../../assets/img/no-cover-placeholder.jpg")}
          alt="Book cover">
        </img>
        <Dropdown book={book} updateCallback={this.update.bind(this)}/>
        <BookInfo book={book}/>
      </div>
    );
  }
}

export default Book;
