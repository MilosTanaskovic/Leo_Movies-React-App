// Reducer here is a fun that returns some state date
// It basically describes how our state is transferred into the next state.
export default (state, action) => {
 switch(action.type){
  case 'ADD_LEOMOVIE_TO_WATCHLIST':
   return{
    ...state,
    watchlist: [action.payload, ...state.watchlist],
   };
   
  default:
   return state;
 }
}