import React from 'react';
import './MovieBox.css'

const API_IMG='https://image.tmdb.org/t/p/w500/';
const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
  return (
        <div className='card'>
          <div className='rating'>{parseFloat(vote_average).toFixed(1)}</div>
          <img src={API_IMG + poster_path} alt={title}/>
          <h1>{title}</h1>
          <p className='desc'>{overview}</p>
          <br/>
          <p className='desc'>Release date: {release_date}</p>
        </div>
  )
}

export default MovieBox;