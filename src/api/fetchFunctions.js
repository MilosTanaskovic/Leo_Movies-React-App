import endpoints from './endpoints'
import { get } from './requestWrappers'

const AUTH_TOKEN = '7c1dfb98061abe2e0a7af06ce4b4b7a3';

export const fetchMovies = async (searchString) => {
  return await get(endpoints.searchMovie(searchString), {
    common: {
      'Authorization': AUTH_TOKEN
    }
  })
}