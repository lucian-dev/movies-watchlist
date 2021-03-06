import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="movie-note">{movie.vote_average}</div>
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="filler-poster-full"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
