import React, { Component } from 'react';
import Shelf from './shelf.component';
import * as BooksAPI from '../data-source/BooksAPI';
import { Link } from 'react-router-dom';
import '../assets/styles/bookshelf.css';
import '../App.css';

class Bookshelf extends Component {

  state = {
    shelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  shelfs = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => books.map((book) => this.shelfs[book.shelf].push(book)))
      .then(() => {
        console.log('--.....-', this.shelfs);
        this.setState({ shelfs: this.shelfs });
      });
    BooksAPI.search('fitness').then((i) => console.log('i: ', i));
    BooksAPI.update({id:'zpQ4Vv30fAgC'}, 'wantToRead').then((i) => console.log('i: ', i));
  }

  render() {
    return (
      <div>
        <div className="bookshelf-top">
          <div className="bookshelf-title">
            <h1>Read</h1>
          </div>
          <Link
            to="/search"
            className="bookshelf-search"
          >Add Contact</Link>
        </div>
        <div className="bookshelf-content">
          {Object.keys(this.state.shelfs).map((shelf, index) => (
            <Shelf key={index} shelf={shelf} shelfbooks={this.state.shelfs[shelf]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Bookshelf;
