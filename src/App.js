import React, { Component } from 'react';
import './App.css';
import BooksList from  './components/books-list.component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BooksList />
      </div>
    );
  }
}

export default App;
