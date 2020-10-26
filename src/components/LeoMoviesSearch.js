import React, { useState, useEffect } from 'react'
import {ResultMovie} from './ResultMovie';
import axios from 'axios';

export const LeoMoviesSearch = () => {
 const [query, setQuery] = useState('');
 // store API results
 const [results, setResults] = useState([]);

 

 const changeHandler = (e) => {
  e.preventDefault();
  //console.log(e.target.value);
  setQuery(e.target.value);

  // axios
 
  //  axios({
  //   method: 'GET',
  //   url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_LEO_MOVIES_TMDB_API}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
  //  }).then((res) => {
  //   setResults(res.data.results);
  //   console.log(setResults(res.data.result));
  //  })
 

 // fetch
  fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_LEO_MOVIES_TMDB_API}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if(!data.errors){
         setResults(data.results);
        }else{
         setResults([]);
        }
      });
  
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
