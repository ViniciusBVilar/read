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

  state = {
    book: {}
  }

  componentWillMount() {
    this.setState({ book: this.props.book });
  }

  update = (shelf) => {
    const bookId = this.state.book.id;
    const currentlyBookshelf = this.state.book.shelf ? this.state.book.shelf : 'none';
    BooksAPI.update({ id: bookId }, shelf)
      .then((books) => this.props.updateCallback(books))
      .then(() => this.updateCheck(bookId, currentlyBookshelf, shelf))
      .then(() => this.updateBook(shelf))
  }

  updateCheck = (bookId, currentlyBookshelf, shelf) => {
    document.getElementById(`${bookId}${shelf}`) &&
      (document.getElementById(`${bookId}${shelf}`).textContent = `✓ ${SHELFS[shelf]}`);
    document.getElementById(`${bookId}${currentlyBookshelf}`) &&
      (document.getElementById(`${bookId}${currentlyBookshelf}`).textContent = `${SHELFS[currentlyBookshelf]}`);
  }

  updateBook = (shelf) => {
    let book = this.state.book;
    book['shelf'] = shelf;
    this.setState({ book });
  }

  render() {
    const book = this.state.book ? this.state.book : {};
    return (
      <div className="book">
        <Image src={book.imageLinks &&
          book.imageLinks.smallThumbnail}
          alt="Book cover"
        />
        <Dropdown book={book} updateCallback={this.update.bind(this)}/>
        <BookInfo book={book}/>
      </div>
    );
  }
}

export default Book;
