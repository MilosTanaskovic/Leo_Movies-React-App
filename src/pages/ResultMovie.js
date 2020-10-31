import React, { useContext } from 'react'
//import component
import Movie from '../components/movie_poster/Movie';
// import context
import { GlobalContext } from '../context/GlobalState';
// import styles
import './Main.scss';

export const ResultMovie = ({movie}) => {
  const { 
    addMovieToWatchList, 
    addMovieToFavouritemovie, 
    watchlist, 
    favouritemovie 
  } = useContext(GlobalContext);

  // Store M and FM
  let storedMovie = watchlist.find(obj => obj.id === movie.id);
  let storedMovieFavourite = favouritemovie.find((obj) => obj.id === movie.id);

  // Disabled WL and FM btn
  const watchlistDisabled = storedMovie 
    ? true 
    : storedMovieFavourite
    ? true
    : false;
  const favouritemovieDisabled = storedMovieFavourite ? true : false;

 return (
  <div className='result-movie'>
    {/* Poster Movies */} 
    <div className='poster-wrapper'>
     <Movie movie={movie}/>
    </div>
    {/* Info for each Poster Movie */}
    <div className="info">
      <div className="header">
       <h3 className='title'>{movie.title}</h3>
       <h4 className='release-date'>
        {movie.release_date ? movie.release_date.substring(0, 4) : '---'}
       </h4>
      </div>

      <div className='controls'>
        <button className='ctrl-btn btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchList(movie)}>
          <i class="fa-fw fa fa-eye"></i>
        </button>

        <button className='ctrl-btn btn' disabled={favouritemovieDisabled} onClick={() => addMovieToFavouritemovie(movie)}>
          <i class="fa-fw far fa-star"></i>
        </button>
      </div>
    </div>
  </div>
 )
}

