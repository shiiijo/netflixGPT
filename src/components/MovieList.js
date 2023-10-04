import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="md:text-2xl md:my-2 text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex md:my-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
