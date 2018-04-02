import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import { CATEGORIES } from '../search.models';
import '../../../assets/styles/search.css';

class SearchHeader extends React.Component {

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    showingCategories: []
  }

  componentWillMount() {
    this.filterCategories('');
  }

  updateQuery = (query) => {
    this.filterCategories(query);
    this.setState({ query });
    this.props.search(query);
  }

  filterCategories = (query) => {
    const match = new RegExp(escapeRegExp(query), 'i');
    const showingCategories = query ?
      CATEGORIES.filter(category => match.test(category)) : CATEGORIES;
    showingCategories.sort();
    this.setState({ showingCategories });
  }

  handleSubmit = (event) => {
    this.props.search(document.getElementById('categoryInput').value);
    //TODO: fix to prevent default form action. The following code is not working
    event.preventDefault();
    return false;
  }

  render() {
    const { showingCategories, query } = this.state;
    return (
      <div className="search-books-bar">
        <Link className="back-search" to="/">Back</Link>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="autocomplete">
            <input id="categoryInput" type="text" name="searchField"
              placeholder="Search books by category" autoFocus
              value={query}
              onChange={event => this.updateQuery(event.target.value)} />
          </div>
        </form>
        <button id="autoCompleteSubmit" type="submit" className="search" name="searchFieldSubmit"
          alt="search" onClick={() => this.props.search(document.getElementById('categoryInput').value)} />
        <p className="auto-complete-title">{showingCategories.length === CATEGORIES.length ?
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
