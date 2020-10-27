// Reducer here is a fun that returns some state date
// It basically describes how our state is transferred into the next state.
export default (state, action) => {
 switch(action.type){
  case 'ADD_LEOMOVIE_TO_WATCHLIST':
   return{
    ...state,
    watchlist: [action.payload, ...state.watchlist],
   };
  case 'REMOVE_MOVIE_FROM_WATCHLIST':
    return {
      ...state,
      watchlist: state.watchlist.filter((movie) => movie.id !== action.payload)
    }
  case 'ADD_MOVIE_TO_FAVOURITEMOVIE':
    return {
      ...state,
      watchlist: state.watchlist.filter((movie) => movie.id !== action.payload.id),
      favouritemovie: [action.payload, ...state.favouritemovie]

    }
  case 'MOVE_TO_WATCHLIST':
    return {
      ...state,
      favouritemovie: state.favouritemovie.filter((movie) => movie.id !== action.payload.id),
      watchlist: [action.payload, ...state.watchlist]
    }
  case 'REMOVE_FROM_FAVOURITESMOV':
    return {
      ...state,
      favouritemovie: state.favouritemovie.filter((movie) => movie.id !== action.payload)
    }
   
  default:
   return state;
 }
}