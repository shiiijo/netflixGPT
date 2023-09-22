import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SubContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return null;

  return (
    <div className="bg-black">
      <div className="relative -mt-64 z-30">
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
      <MovieList title={"Only on Netflix"} movies={movies} />
      <MovieList title={"Crime TV Dramas"} movies={movies} />
      <MovieList title={"Scary TV Shows"} movies={movies} />
      <MovieList title={"Real Stories"} movies={movies} />
      <MovieList title={"Bollywood"} movies={movies} />
      <MovieList title={"Horror Movies"} movies={movies} />
      <MovieList title={"Binge Worthy"} movies={movies} />
      <MovieList title={"Comedy Dramas"} movies={movies} />
      <MovieList title={"Documenteries"} movies={movies} />
    </div>
  );
};

export default SubContainer;
