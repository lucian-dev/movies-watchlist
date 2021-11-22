import React, { useContext } from "react";
import {
  AiOutlineEye,
  AiOutlineClose,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchList,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <AiOutlineEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <AiOutlineClose />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
            <AiOutlineEyeInvisible />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <AiOutlineClose />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
