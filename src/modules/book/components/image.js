import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/book.css';

class Image extends Component {

  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const src = this.props.src;
    return (
      <img className="book-cover-img" src={src ?
        src :
        /* eslint no-undef: 0 */
        require('../../../assets/img/no-cover-placeholder.jpg')}
        alt={this.props.alt}>
      </img>
    );
  }
}

export default Image;
