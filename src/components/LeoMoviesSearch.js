import React, { useState, useEffect } from 'react'
import {ResultMovie} from './ResultMovie';
import axios from 'axios';
import fetchMovies from '../api'

export const LeoMoviesSearch = () => {
 const [query, setQuery] = useState('');
 // store API results
 const [results, setResults] = useState([]);

 

 const changeHandler = async (e) => {
  e.preventDefault();
  const searchQuery = e.target.value
  // setQuery();
 
  const movies = await fetchMovies(searchQuery)

  console.log(movies)
  
 };

 return (
  <div className='container'>
   <div className='add-content'>
    <div className='input-wrapper'>
     <input type="text" name="" id="" placeholder='Search for a movie' 
     value={query} 
     onChange={changeHandler} />
    </div>
    { results.length > 0 && (
     <ul className='results'>
      {results.map((movie) => (
       <li key={movie.id}>
        <ResultMovie movie={movie} />
       </li>
      ))}
     </ul>
    )}
   </div>
  </div>
 )
}
