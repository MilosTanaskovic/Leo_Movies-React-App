import React from 'react'

const Movie = ({movie}) => {
 return (
  <>
   { movie.poster_path ? (
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
      alt={`${movie.title}`}
      />
     ) : (
      <div className="filler-poster"></div>
     )}
  </>
 )
}

export default Movie
