import React, { useContext } from 'react'

import {GlobalContext} from '../context/GlobalState';
import MovieListPoster from './movie_poster/MovieListPoster';

export const FavouritesMov = () => {
 const { favouritemovie } = useContext(GlobalContext);

 return (
  <div className='movie-page'>
   <div className="container">
    <div className="header">
     <h1 className="heading">
      My Favourite LeoMovies
     </h1>
     {/* count favourites movies */}
     <span className='count-pill'>
      { favouritemovie.length } { favouritemovie.length === 1 ? 'favouritre movie' : 'favourites movies'}
     </span>
    </div>

    {/* each movie */}
    {favouritemovie.length > 0 ? 
     (
      <div className="movie-grid">
       {favouritemovie.map((movie) => (
        <MovieListPoster movie={movie} type='favouritemovie'/>
       ))}
      </div>
     ) : (
      <h2 className="no-movies">No movies in your list, add some!</h2>
     )     
    }   
   </div>
  </div>
 )
}
