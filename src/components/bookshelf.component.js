import React, { Component } from 'react';
import Book from './book.component';
import '../assets/styles/bookshelf.css';

class Bookshelf extends Component {

  render() {
    console.log('aaaaaaasss', this.props.shelfbooks);
      return (
        <div className="bookshelf">
          <h1 className="bookshelf-title">{this.props.shelf}</h1>
          <div className="bookshelf-books">
            <div className="bookshelf-grid">
              <li>
                {/* {this.props.shelfbooks.map((book) => ( */}
                  <Book />
                {/* ))} */}
              </li>
            </div>
          </div>
        </div>
      );
    }
}

export default Bookshelf;
