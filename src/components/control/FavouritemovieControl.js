import React from 'react'
// import styles
import './Main.scss';
export const FavouritemovieControl = ({movie, type, moveToWatchlist, removeFromFavouritesMov}) => {
 return (
     <>
      <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
       <i class="fa-fw far fa-star-half"></i>
      </button>
      <button className='ctrl-btn' onClick={() => removeFromFavouritesMov(movie.id)}>
       <i class="fa-fw fa fa-times"></i>
      </button>
     </>
 )
}
