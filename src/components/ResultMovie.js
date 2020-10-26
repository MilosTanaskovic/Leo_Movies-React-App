import React, { useContext } from 'react'
//import component
import Movie from './movie_poster/Movie';
// import context
import { GlobalContext } from '../context/GlobalState';

export const ResultMovie = ({movie}) => {
  const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find(obj => obj.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;

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
       <h4 className='release-date'>{movie.release_date ? movie.release_date.substring(0, 4) : '---'}</h4>
      </div>

      <div className='controls'>
        <button className='btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchList(movie)}>Add To WatchList</button>
      </div>
    </div>
  </div>
 )
}

