import React from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from './shelfs.model';
import '../../assets/styles/book.css';

class Dropdown extends React.Component {

  static propTypes ={
    book: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  }

  checkBookshelf(shelf) {
    return !this.props.book.shelf && shelf === 'none' ? '✓ ' :
      this.props.book.shelf === shelf ? '✓ ' : '';
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-content">
          <h3>Move to...</h3>
          {this.props.book && Object.keys(SHELFS).map((shelf, index) => (
            <a key={index} id={`${this.props.book.id}${shelf}`}
            onClick={() => this.props.updateCallback(shelf)} >
              {this.checkBookshelf(shelf)}{SHELFS[shelf]}
            </a>
          ))}
        </div>
        <div className="book-shelf-changer">
          <div className="select" />
        </div>
      </div>
    )
    }
}

export default Dropdown;
