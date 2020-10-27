import React from 'react'

export const WatclistControl = ({movie, type, removeMovieFromWatchList, addMovieToFavouritemovie}) => {
 return (
  <>
     <button className='ctrl-btn' onClick={() => addMovieToFavouritemovie(movie)}>
      <i class="fa-fw far fa-star"></i>
     </button>
     <button className='ctrl-btn' onClick={() => removeMovieFromWatchList(movie.id)}>
      <i class="fa-fw fa fa-times"></i>
     </button>
     </>
 )
}
