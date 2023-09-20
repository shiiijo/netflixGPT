import React from "react";
import Header from "./Header";
import { API_OPTNS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTNS
    );
    const data = await json.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  React.useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
      <SubContainer />
    </div>
  );
};

export default Browse;
