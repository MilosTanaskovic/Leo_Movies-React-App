import endpoints from './endpoints'
import { get } from './requestWrappers'

export const fetchMovies = async (searchString) => {
  return await get(endpoints.searcMovie, 
    { query: searchString }  
  );
};