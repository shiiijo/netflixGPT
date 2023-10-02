import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SubContainer = () => {
  const nowPlayingmovies = useSelector((store) => store.movies?.nowPlaying);
  const upComingMovies = useSelector((store) => store.movies?.upComing);
  const popularMovies = useSelector((store) => store.movies?.popular);
  const topRatedMovies = useSelector((store) => store.movies?.topRated);

  if (!nowPlayingmovies || !upComingMovies || !popularMovies || !topRatedMovies)
    return null;

  return (
    <div className="bg-black pt-[130%] md:pt-0">
      <div className="relative -mt-60 z-30">
        <MovieList title={"Now Playing"} movies={nowPlayingmovies} />
      </div>
      <MovieList title={"Only on Netflix"} movies={upComingMovies} />
      <MovieList title={"Crime TV Dramas"} movies={popularMovies} />
      <MovieList title={"Scary TV Shows"} movies={topRatedMovies} />
      <MovieList title={"Real Stories"} movies={upComingMovies} />
      <MovieList title={"Bollywood"} movies={popularMovies} />
      <MovieList title={"Horror Movies"} movies={topRatedMovies} />
      <MovieList title={"Binge Worthy"} movies={nowPlayingmovies} />
      <MovieList title={"Comedy Dramas"} movies={topRatedMovies} />
      <MovieList title={"Documenteries"} movies={popularMovies} />
    </div>
  );
};

export default SubContainer;
