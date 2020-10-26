import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//  initial state - is going to be of our store
const initialState = {
 watchlist : [],
 favouritemovie : []
}

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
 const [state, dispatch] = useReducer(AppReducer, initialState)

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