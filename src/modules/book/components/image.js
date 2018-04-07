import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/book.css';

class Image extends Component {

  static propTypes = {
    alt: PropTypes.string.isRequired,
    smallThumbnail: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  };

  render() {
    const { alt, smallThumbnail, thumbnail } = this.props;
    return (
      <a href={thumbnail ?
        thumbnail : ''}
        target="_blank">
        <img className="book-cover-img" src={smallThumbnail ?
          smallThumbnail :
          /* eslint no-undef: 0 */
          require('../../../assets/img/no-cover-placeholder.jpg')}
          alt={alt}>
        </img>
      </a>
    );
  }
}

export default Image;
