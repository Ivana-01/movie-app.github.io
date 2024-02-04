import React, { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import './Nav.css';
import react from './img/react.png';

const API_URL ='https://api.themoviedb.org/3/movie/popular?api_key=511c1029a0ecf4daa550129e001af387';

function App() {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState('');
  const searchMovie = async (e) => {
    e.preventDefault();
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=511c1029a0ecf4daa550129e001af387&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e){
      console.log(e);
    }
  }
  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    fetch(API_URL)
    .then((response)=> response.json())
    .then((data) => {
      setMovies(data.results);
    })
  }, []);
  return (
    <div className="App">
      <nav className='nav'>
        <img className='navImg' src={react} alt='react icon' />
        <a href='./App.js' className='navHome'>Trending movies</a>
        <div className='search-bar'>
          <input className='search' type='text' placeholder='Search a movie...' value={query} onChange={changeHandler} name="searchbar"/>
          <button className='searchBtn' onClick={searchMovie}>Search</button>
        </div>
      </nav>
      <div className='container'>
        <div className='card-container'>
      {movies.length > 0 ? 
      ( movies.map((movieReq) => <MovieBox  key={movieReq.id} {...movieReq} />)) : (
            <h2>Sorry, no match!</h2>)}
        </div>
      </div> 
    </div>
  )
}

export default App;
