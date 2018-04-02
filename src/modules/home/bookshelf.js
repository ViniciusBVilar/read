import React from 'react';
import BookshelfHeader from './components/bookshelf-header';
import Shelf from './components/shelf';
import SearchFAB from './components/search-fab';
import * as BooksAPI from '../../data-source/BooksAPI';
import { SHELFS } from '../../models/shelfs.model';
import '../../assets/styles/bookshelf.css';

class Bookshelf extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    return (
      <div>
        <BookshelfHeader />
        <div className="bookshelf-content">
          {Object.keys(SHELFS).filter(shelf => shelf !== 'none').map((shelf, index) => (
            <Shelf key={index} shelf={SHELFS[shelf]} updateCallback={this.getBooks.bind(this)}
              shelfbooks={this.state.books.filter((book) => book.shelf === shelf)} />
          ))}
        </div>
        <SearchFAB />
      </div>
    );
  }
}

export default Bookshelf;
