import React, { useContext } from 'react'
// import context
import {GlobalContext} from '../context/GlobalState';
// import component
import MovieListPoster from '../components/movie_poster/MovieListPoster';

export const WatchList = () => {
 const {watchlist} = useContext(GlobalContext)

 return (
  <div className='movie-page'>
   <div className="container">
    <div className="header">
     <h1 className="heading">
      My WatchList
     </h1>

     {/* count watch movies */}
     <span className='count-pill'>
      { watchlist.length } { watchlist.length === 1 ? 'movie' : 'movies'}
     </span>
    </div>

    {/* each movie */}
    {watchlist.length > 0 ? 
     (
      <div className="movie-grid">
       {watchlist.map((movie) => (
        <MovieListPoster movie={movie} type='watchlist'/>
       ))}
      </div>
     ) : (
      <h2 className="no-movies">No movies in your list! Please add it.</h2>
     )     
    }   
   </div>
  </div>
 )
}








