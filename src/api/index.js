import endpoints from './endpoints'
import { get } from './requestWrappers'
import { fetchMovies } from './fetchFunctions'

export const getBaseUrl = () => 'https://api.themoviedb.org/3'

export default {  endpoints,  get,
  fetchMovies
};
