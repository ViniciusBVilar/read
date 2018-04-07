import React from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from '../../../models/shelfs.model';
import '../../../assets/styles/book.css';

class Dropdown extends React.Component {

  static propTypes = {
    currentlyBookshelf: PropTypes.string.isRequired,
    updateCallback: PropTypes.func.isRequired,
  }

  checkBookshelf = (shelf) => {
    return !this.props.currentlyBookshelf && shelf === 'none' ? '✓ ' :
      this.props.currentlyBookshelf === shelf ? '✓ ' : '';
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-content">
          <h3>Move to...</h3>
          {Object.keys(SHELFS).map((shelf, index) => (
            <a key={index} onClick={() => this.props.updateCallback(shelf)} >
              {this.checkBookshelf(shelf)}{SHELFS[shelf]}
            </a>
          ))}
        </div>
        <div className="book-shelf-changer">
          <div className="select" />
        </div>
      </div>
    );
  }
}

export default Dropdown;
