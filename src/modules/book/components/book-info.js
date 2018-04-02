import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/book.css';

class BookInfo extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const book = this.props.book;
    return (
      <div className="book-info-container">
        <div className="book-title-container">
          <p className="book-title">{book.title}</p>
          <p className="book-subtitle">{book.subtitle}</p>
        </div>
        {book.authors &&
          book.authors.map((author, index) => (
            <p key={index}
              className="book-authors">{author}</p>
          ))}
      </div>
    );
  }
}

export default BookInfo;
