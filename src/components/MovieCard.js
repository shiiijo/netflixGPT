import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      {movie.backdrop_path && (
        <div className="w-64 m-1 cursor-pointer">
          <img
            src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path}
            alt={movie.original_title}
          ></img>
        </div>
      )}
    </>
  );
};

export default MovieCard;
