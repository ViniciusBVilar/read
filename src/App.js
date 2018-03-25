import React, { Component } from 'react';
import './App.css';
import Bookshelf from './components/bookshelf.component';
import SearchList from './components/search.component';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf />
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchList
          />
        )
        }/>
      </div>
    );
  }
}

export default App;
