import React, { Fragment, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList'



function App() {
  const [state, setState] = useState({
    name: ''
  })
  const logger = event => {
    if(event.key === 'Enter'){
      setState({
        name : event.target.value
      })
      event.target.value = ''
    }
  }

  return (
    <Fragment>
      <header className='header'>
        <h1 className='h1' >Search movie app</h1>
      </header>
      <div className='Search'>
            <input className='input' type='text' 
            placeholder='Введите название фильма'
            onKeyPress={logger}/>
        </div>
      <MovieList name = {state}/>
    </Fragment>
    );
}

export default App;
