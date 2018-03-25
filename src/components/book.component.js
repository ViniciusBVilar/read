import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../data-source/BooksAPI';
import '../assets/styles/book.css';
import '../App.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  update(category) {
    BooksAPI.update({ id: this.props.book.id }, category).then((books) => this.setState({ books }));
  }

  render() {
    console.log('<>><<>>', this.props.book);
    return (
      <div>
        <div className="book">
          <div className='book-cover-img' style={{
            backgroundImage: `url(${this.props.book.imageLinks ?
              this.props.book.imageLinks.smallThumbnail :
              '../assets/img/no-cover-placeholder.jpg'})`
          }}>
          <div class="dropdown">
            <div class="dropdown-content">
            <p>Move to...</p>
              <p onClick={this.update('Currently reading')} >Currently reading</p>
              <p onClick={this.update('Want to read')} >Want to read</p>
              <p onClick={this.update('Read')} >Read</p>
              <p onClick={this.update('Unset')} >Unset</p>
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
