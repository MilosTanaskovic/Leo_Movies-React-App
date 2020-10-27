import React, { useContext } from 'react'

import {GlobalContext} from '../../context/GlobalState';
// import the child component
import { WatclistControl } from './WatclistControl';
import { FavouritemovieControl } from './FavouritemovieControl';

export const MovieControls = ({movie, type}) => {
 const {
  removeMovieFromWatchList, 
  addMovieToFavouritemovie, 
  moveToWatchlist, 
  removeFromFavouritesMov
 } = useContext(GlobalContext);
 
 return (
  <div className='inner-card-controls'>
   {
    type === 'watchlist' && (
      <WatclistControl 
      movie={movie} 
      type={type} 
      removeMovieFromWatchList={removeMovieFromWatchList}
      addMovieToFavouritemovie={addMovieToFavouritemovie}
      />
    )
   }
   {
    type === 'favouritemovie' && (
     <FavouritemovieControl 
     movie={movie} 
     type={type}
     moveToWatchlist={moveToWatchlist}
     removeFromFavouritesMov={removeFromFavouritesMov}
     />
    )
   }
  </div>
 )
}
