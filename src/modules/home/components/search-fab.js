import React from 'react';
import { Link } from 'react-router-dom';

class SearchFAB extends React.Component {

  render() {
    return (
      <div className="open-search">
        <Link
          to="/search"
          className="bookshelf-search"
        >Search</Link>
      </div>
    );
  }
}

export default SearchFAB;
