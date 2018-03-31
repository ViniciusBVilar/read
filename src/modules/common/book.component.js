import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from './shelfs.models';
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
    debugger
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

  checkBookshelf(shelf) {
    return !this.props.book.shelf && shelf === 'none' ? '✓ ' :
      this.props.book.shelf === shelf ? '✓ ' : '';
  }

  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <img className="book-cover-img" src={book.imageLinks ?
          book.imageLinks.smallThumbnail :
          "../../assets/img/no-cover-placeholder.jpg"}
          alt='Book cover'></img>
        <div className="dropdown">
          <div className="dropdown-content">
            <h3>Move to...</h3>
            {Object.keys(SHELFS).map((shelf, index) => (
              <a key={index} id={`${book.id}${shelf}`}
                onClick={() => this.update(shelf)} >
                  {this.checkBookshelf(shelf)}{SHELFS[shelf]}
              </a>
            ))}
          </div>
          <div className="book-shelf-changer">
            <div className="select" />
          </div>
        </div>
        <div className="book-title-container">
          <h1 className="book-title">{book.title}</h1>
          <h2 className="book-title">{book.subtitle}</h2>
          {book.authors &&
            book.authors.map((author, index) => (
              <h1 key={index}
                className="book-authors">{author}</h1>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
