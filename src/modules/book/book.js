import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookInfo from './components/book-info';
import Dropdown from './components/dropdown';
import Image from './components/image';
import '../../assets/styles/book.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  };

  update = (shelf) => {
    this.props.updateCallback(this.props.book.id, shelf);
  }

  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <Image smallThumbnail={book.imageLinks &&
          book.imageLinks.smallThumbnail}
          thumbnail={book.imageLinks.thumbnail}
          alt="Book cover"
        />
        <Dropdown currentlyBookshelf={book['shelf']} updateCallback={this.update.bind(this)} />
        <BookInfo book={book} />
      </div>
    );
  }
}

export default Book;
