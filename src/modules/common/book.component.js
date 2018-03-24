import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../data-source/BooksAPI';
import '../../assets/styles/book.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  update(category) {
    BooksAPI.update({ id: this.props.book.id }, category).then((books) => console.log('eee', books));
  }

  checkBookshelf(shelf) {
    return this.props.book.shelf && this.props.book.shelf === shelf;
  }

  render() {
    return (
      <div>
        <div className="book">
          <div className='book-cover-img' style={{
            backgroundImage: `url(${this.props.book.imageLinks ?
              this.props.book.imageLinks.smallThumbnail :
              '../assets/img/no-cover-placeholder.jpg'})`
          }}>
            <div className="dropdown">
              <div className="dropdown-content">
                <h3>Move to...</h3>
                <a onClick={() => this.update('currentlyReading')} >{
                  this.checkBookshelf('currentlyReading') ? <p>&#x2713; Currently reading</p> : <p>Currently reading</p>
                }</a>
                <a onClick={() => this.update('wantToRead')} >{
                  this.checkBookshelf('wantToRead') ? <p>&#x2713; Want to read</p> : <p>Want to read</p>
                }</a>
                <a onClick={() => this.update('read')} >{
                  this.checkBookshelf('read') ? <p>&#x2713; Read</p> : <p>Read</p>
                }</a>
              </div>
              <div className="book-shelf-changer">
                <div className="select"/>
              </div>
            </div>
          </div>
        </div>

        <h1 className="book-title">{this.props.book.title}</h1>
        <h2 className="book-title">{this.props.book.subtitle}</h2>
        <div>
          {this.props.book.authors &&
            this.props.book.authors.map((author, index) => (
              <h1  key={index}
                className="book-authors">{author}</h1>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
