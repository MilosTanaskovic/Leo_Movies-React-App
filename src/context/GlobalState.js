import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//  initial state - is going to be of our store
const initialState = {
 watchlist : localStorage.getItem('watchlist') 
 ? JSON.parse(localStorage.getItem('watchlist'))
 : [],
 favouritemovie : localStorage.getItem('favouritemovie') 
 ? JSON.parse(localStorage.getItem('favouritemovie'))
 : []
}

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
 const [state, dispatch] = useReducer(AppReducer, initialState)

 useEffect(() => {
  // store watchlist
  localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
  // store favouritemovie
  localStorage.setItem('favouritemovie', JSON.stringify(state.favouritemovie));
 }, [state]);

 // action when we're click on btn
 const addMovieToWatchList = (movie) => {
  // dispatch a type of movie to watch list and inside that i provide the payload of movie
  dispatch({
   type: 'ADD_LEOMOVIE_TO_WATCHLIST',
   payload: movie
  });
 }
 // remove movie
 const removeMovieFromWatchList = (id) => {
  dispatch({
   type: 'REMOVE_MOVIE_FROM_WATCHLIST',
   payload: id
  });
 }
 // add to favourite movie
 const addMovieToFavouritemovie = (movie) => {
  dispatch({
   type: 'ADD_MOVIE_TO_FAVOURITEMOVIE',
   payload: movie
  })
 }
 // move to watchlist
 const moveToWatchlist = (movie) => {
  dispatch({
   type: 'MOVE_TO_WATCHLIST',
   payload: movie
  })
 }
 // remove from FavouritesMov page
 const removeFromFavouritesMov = (id) => {
  dispatch({
   type: 'REMOVE_FROM_FAVOURITESMOV',
   payload: id
  })
 }
 return(
  <GlobalContext.Provider 
  value={
    { 
     watchlist: state.watchlist, 
     favouritemovie: state.favouritemovie, 
     addMovieToWatchList,
     removeMovieFromWatchList,
     addMovieToFavouritemovie,
     moveToWatchlist,
     removeFromFavouritesMov 
    }
   }>
   {props.children}
  </GlobalContext.Provider>
 )
}