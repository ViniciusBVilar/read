import React, { Component } from 'react';
import Bookshelf from './bookshelf.component';
import * as BooksAPI from '../data-source/BooksAPI';

import '../assets/styles/book-list.css';
import '../App.css';

class BooksList extends Component {

  state = {
    shelfs: {}
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => books.map((book) => this.defineShelf(book) ))
      .then(() => this.setState({ shelfs: this.state.shelfs }));
  }

  defineShelf(book) {
    const currentlyBookshelf = this.state.shelfs[book.shelf] ?
      [this.state.shelfs[book.shelf]] : [book];
    this.state.shelfs[book.shelf] = currentlyBookshelf.push(book);
    return this.state.shelfs;
  }

  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>Welcome to Read</h1>
        </div>
        <div className="list-books-content">
          {Object.keys(this.state.shelfs).map((shelf, index) => (
            <Bookshelf key={index} shelf={shelf} shelfbooks={this.state.shelfs[shelf]}/>
          ))}
        </div>
      </div>
    );
  }
}

export default BooksList;
