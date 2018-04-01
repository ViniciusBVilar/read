import React, { Component } from 'react';
import './App.css';
import Bookshelf from './modules/home/bookshelf';
import SearchList from './modules/search/search';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf />
        )} />
        <Route path="/search" render={() => (
          <SearchList />
        )
        } />
      </div>
    );
  }
}

export default App;
