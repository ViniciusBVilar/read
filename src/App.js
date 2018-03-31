import React, { Component } from 'react';
import './App.css';
import Bookshelf from './modules/home/bookshelf.component';
import SearchList from './modules/search/search.component';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchList />
        )
        } />
      </div>
    );
  }
}

export default App;
