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
    this.checkBookshelf(shelf);
    BooksAPI.update({ id: this.props.book.id }, shelf)
      .then((books) => this.props.updateCallback(books));
  }

  checkBookshelf(shelf) {
    return !this.props.book.shelf && shelf === 'none' ?
      <p>✓ {SHELFS[shelf]}</p> :
      this.props.book.shelf === shelf ?
      <p>✓ {SHELFS[shelf]}</p> :
      <p>{SHELFS[shelf]}</p>;
  }

  render() {
    return (
      <div className="book">
        <img className="book-cover-img" src={this.props.book.imageLinks ?
          this.props.book.imageLinks.smallThumbnail :
          "../../assets/img/no-cover-placeholder.jpg"}
        alt='Book cover'></img>
        <div className="dropdown">
          <div className="dropdown-content">
            <h3>Move to...</h3>
            {Object.keys(SHELFS).map((shelf, index) => (
              <a key={index} onClick={() => this.update(shelf)} >{this.checkBookshelf(shelf)}</a>
            ))}
          </div>
          <div className="book-shelf-changer">
            <div className="select" />
          </div>
        </div>
        <div className="book-title-container">
          <h1 className="book-title">{this.props.book.title}</h1>
          <h2 className="book-title">{this.props.book.subtitle}</h2>
          {this.props.book.authors &&
            this.props.book.authors.map((author, index) => (
              <h1 key={index}
                className="book-authors">{author}</h1>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
