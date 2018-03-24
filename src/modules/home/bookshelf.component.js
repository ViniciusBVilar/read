import React from 'react';
import Shelf from './shelf.component';
import PropTypes from 'prop-types';
import BookshelfHeader from './bookshelf-header.component';
import { Link } from 'react-router-dom';

import '../../assets/styles/bookshelf.css';
import '../../App.css';

class Bookshelf extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  shelfs = ['currentlyReading', 'wantToRead', 'read'];

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <BookshelfHeader/>
        <div className="bookshelf-content">
          {this.shelfs.map((shelf, index) => (
            <Shelf key={index} shelf={shelf} shelfbooks={this.props.books.filter((book) => book.shelf === shelf)} />
          ))}
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="bookshelf-search"
            >Search</Link>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
