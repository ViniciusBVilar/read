import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import escapeRegExp from 'escape-string-regexp'

import '../../assets/styles/search.css';
import '../../App.css';

class SearchHeader extends React.Component {

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  categories = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
    'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
    'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games',
    'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
    'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
    'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
    'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
    'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.props.search(query);
  }

  cleanQuery = () => this.setState({ query: '' })

  handleSubmit(event) {
    this.props.search(document.getElementById('categoryInput').value);
    event.preventDefault();
    return false;
  }

  render() {

    const { query } = this.state

    let showingCategories
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingCategories = this.categories.filter(category => match.test(category));
    } else {
      showingCategories = this.categories;
    }

    showingCategories.sort()


    return (
      <div className='search-books-bar'>
        <Link className='back-search' to='/'>Back</Link>
        <form autoComplete='off' onSubmit={this.handleSubmit}>
          <div className='autocomplete'>
            <input id='categoryInput' type='text' name='searchField'
              placeholder='Search books by category' autoFocus
              value={query}
              onChange={event => this.updateQuery(event.target.value)} />
          </div>
        </form>
        <button id='autoCompleteSubmit' type='submit' className='search' name='searchFieldSubmit'
          alt='search' onClick={() => this.props.search(document.getElementById('categoryInput').value)} />
        <p className="auto-complete-title">{showingCategories.length === this.categories.length ?
          'All categories:' : 'Filtered categories:'}</p>
        <div className="auto-complete-container">
          <select onChange={(event) => this.props.search(event.target.value)}>
            {showingCategories.map((category, index) => (
              <option key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

}

export default SearchHeader;
