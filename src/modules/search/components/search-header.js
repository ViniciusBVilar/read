import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import { CATEGORIES } from '../search.models';
import { DebounceInput } from 'react-debounce-input';
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
    event.preventDefault();
  }

  render() {
    const { showingCategories, query } = this.state;
    return (
      <div className="search-bar">
        <Link className="back-search" to="/">Back</Link>
        <div className="search-bar-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="autocomplete">
                <DebounceInput
                  id="categoryInput" type="text" name="searchField"
                  placeholder="Search books by category" autoFocus
                  value={query}
                  minLength={1}
                  debounceTimeout={300}
                  onChange={event => this.updateQuery(event.target.value)} />
              <input id="autoCompleteSubmit" type="submit" className="search" name="searchFieldSubmit"
                alt="search" />
            </div>
          </form>
          <p className="auto-complete-title">{showingCategories.length === CATEGORIES.length ?
            'All categories:' : 'Filtered categories:'}</p>
          <div className="auto-complete-container">
            <select className="auto-complete-select"
              onChange={(event) => this.props.search(event.target.value)}>
              {showingCategories.map((category, index) => (
                <option key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchHeader;
