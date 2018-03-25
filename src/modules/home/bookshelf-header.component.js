import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfHeader extends React.Component {

  render() {
    return (
      <div className="bookshelf-top">
        <div className="bookshelf-title">
          <Link
            to="/"
          ><h1>Read</h1></Link>
        </div>
      </div>
    );
  }

}

export default BookshelfHeader;
