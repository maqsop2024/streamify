import React from "react";
import MovieItem from './MovieItem';

const MovieList = ({ movies, genres }) => (
  <div>
    {movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} genres={genres}/>
    ))}
  </div>
)

export default MovieList;