import React, { useState, useEffect } from 'react'
import {ResultMovie} from './ResultMovie';
import Api from '../../api';

export const LeoMoviesSearch = () => {
 // store API results
 const [results, setResults] = useState([]);

 

 const onSearch = async (event) => {
  event.preventDefault();
  const searchQuery = event.target.value;
 
  const response = await Api.fetchMovies(searchQuery);
  setResults(response.data.results);
 };

 return (
  <div className='container'>
   <div className='add-content'>
    <div className='input-wrapper'>
     <input type="text" name="" id="" placeholder='Search for a movie'
     onChange={onSearch} />
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
