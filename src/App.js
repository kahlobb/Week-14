import './App.css';
import React, { Component } from 'react';
import MovieList from './components/movie-list';

class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    )
  }
}

export default App;