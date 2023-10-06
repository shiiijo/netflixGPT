import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ReactLoading from "react-loading";

const GptSuggestions = () => {
  const suggestedMovies = useSelector((store) => store.gpt.gptSuggestions);
  const movieKeywords = useSelector((store) => store.gpt.movieKeywords);
  return !suggestedMovies ? (
    <ReactLoading
      className="m-auto mt-24"
      type="bars"
      color="white"
      height={300}
      width={150}
    />
  ) : (
    <div className="bg-black m-16">
      {suggestedMovies.map((movie, idx) => (
        <MovieList title={movieKeywords[idx]} movies={movie.results} />
      ))}
    </div>
  );
};

export default GptSuggestions;
