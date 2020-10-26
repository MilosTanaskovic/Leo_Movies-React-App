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

 return(
  <GlobalContext.Provider value={{watchlist: state.watchlist, favouritemovie: state.favouritemovie, addMovieToWatchList }}>
   {props.children}
  </GlobalContext.Provider>
 )
}