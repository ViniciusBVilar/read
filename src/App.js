import React, { Component } from 'react';
import './App.css';
import Bookshelf from  './components/bookshelf.component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Bookshelf />
      </div>
    );
  }
}

export default App;
