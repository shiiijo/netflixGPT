import React from "react";
import Header from "./Header";
import { API_OPTNS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const dispatch = useDispatch();
  const isGptEnabled = useSelector((store) => store.gpt.isGptEnabled);

  const getNowPlayingMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTNS
    );
    const data = await json.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  const getUpComingMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTNS
    );
    const data = await json.json();
    dispatch(addUpcomingMovies(data.results));
  };

  const getPopularMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTNS
    );
    const data = await json.json();
    dispatch(addPopularMovies(data.results));
  };

  const getTopRatedMovies = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTNS
    );
    const data = await json.json();
    dispatch(addTopRatedMovies(data.results));
  };

  React.useEffect(() => {
    getNowPlayingMovies();
    getUpComingMovies();
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  return (
    <div>
      <Header />
      {isGptEnabled ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SubContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
