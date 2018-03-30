import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import '../../assets/styles/search.css';
import '../../App.css';

class SearchHeader extends React.Component {

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  /*An array containing all the country names in the world:*/
  categories = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
    'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
    'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games',
    'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
    'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
    'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
    'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
    'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']


  componentDidMount() {
    // this.autocomplete(this.categories, (category) => this.props.search(category));
  }

  render() {
    return (
      <div className='search-books-bar'>
        <Link className='back-search' to='/'>Back</Link>
        <form autoComplete='off'>
          <div className='autocomplete'>
            <input id='autoCompleteInput' type='text' name='searchField'
              placeholder='Search books by category' autoFocus />
          </div>
        </form>
        <button id='autoCompleteSubmit' type='submit' className='search' name='searchFieldSubmit'
          alt='search' onClick={() => this.props.search(document.getElementById('autoCompleteInput').value)} />
      </div>
    );
  }

}

export default SearchHeader;
