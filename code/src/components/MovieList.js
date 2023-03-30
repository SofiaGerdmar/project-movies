import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie) => {
        return (
          <Link
            key={movie.original_title}
            to={`/details/${movie.original_title}`}
            className="list-element">{movie.original_title}
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : ''} alt="movie poster" />
          </Link>
        )
      })}
    </section>
  )
};

export default MovieList