import React from 'react'

import Movie from './Movie';
import {MovieControls} from '../control/MovieControls';

const MovieListPoster = ({movie, type}) => {
 return (
  <div className="movie-poster">
  <div className="overlay"></div>
   <Movie movie={movie} type={type}/>
   <MovieControls movie={movie} type={type} />
  </div>
 )
}

export default MovieListPoster
