import React from "react";
import { useSelector } from "react-redux";
import BrowseVidTitle from "./BrowseVidTitle";
import BrowseVidBackground from "./BrowseVidBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return null;

  const recommendedMovie = movies[0];

  const { title, overview, id } = recommendedMovie;

  return (
    <div>
      <BrowseVidTitle title={title} overview={overview} />
      <BrowseVidBackground id={id} />
    </div>
  );
};

export default MainContainer;
