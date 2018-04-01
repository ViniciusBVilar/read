import React from 'react';
import Book from '../book/book';
import PropTypes from 'prop-types';
import '../../assets/styles/shelf.css';

class Shelf extends React.Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    shelfbooks: PropTypes.array.isRequired,
    updateCallback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="shelf">
        <div className="shelf-books">
          <h1 className="shelf-title">{this.props.shelf}</h1>
          <div className="shelf-grid">
            {this.props.shelfbooks.map((book, index) => (
              <li key={index}>
                <Book book={book} updateCallback={this.props.updateCallback.bind(this)} />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
