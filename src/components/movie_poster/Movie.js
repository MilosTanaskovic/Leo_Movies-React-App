import React from 'react'
import { getTmdbImage } from "../../helpers/utils";
const Movie = (props) => {
   const { movie } = props;
 return (
  <>
   { movie.poster_path ? (
         <img src={getTmdbImage(movie.poster_path)} alt={`${movie.title}`} />
      ) : (
         <div className="filler-poster"></div>
      )}
  </>
 )
}

export default Movie
