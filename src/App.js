import React, { Fragment } from 'react';
import './App.css';
import Search from './components/Search/Search'
import MovieList from './components/MovieList/MovieList'


function App() {
  return (
    <Fragment>
      <header className='header'>
        <h1 className='h1'>Search movie app</h1>
      </header>
      <Search/>
      <MovieList/>
    </Fragment>
    );
}

export default App;
