import React from 'react';
import * as BooksAPI from '../../data-source/BooksAPI';
import BookshelfHeader from './bookshelf-header.component';
import Bookshelf from './bookshelf.component';

import '../../assets/styles/bookshelf.css';
import '../../App.css';

class BookList extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    debugger;
    return (
      <div>
        <BookshelfHeader/>
        <div className="bookshelf-content">
          <Bookshelf books={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default BookList;
