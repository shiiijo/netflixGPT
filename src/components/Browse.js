import React from "react";
import Header from "./Header";
import { API_OPTNS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTNS
    );
    const data = await json.json();
    console.log(data?.results);
  };

  React.useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
