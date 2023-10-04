import React from "react";
import openai from "../utils/openai";
import { API_OPTNS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptSuggestions } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = React.useRef(null);
  const dispatch = useDispatch();
  const handleGptSerach = async () => {
    const query = `Act as a movie recomendation system & suggest 5 movies for the query ${searchText.current.value} and give only names of movies as comma seperated.`;

    const results = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptSuggestionsArray = results.choices[0].message.content
      .split(",")
      .map((element) => {
        return element.trim();
      });

    const tmdbSuggestionsPromiseArray = gptSuggestionsArray.map((movie) =>
      searchTmdbMovies(movie)
    );
    const tmdbSuggestionsArray = await Promise.all(tmdbSuggestionsPromiseArray);
    dispatch(
      addGptSuggestions({
        suggestions: tmdbSuggestionsArray,
        movieKeywords: gptSuggestionsArray,
      })
    );
  };

  const searchTmdbMovies = async (movie) => {
    const json = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      API_OPTNS
    );
    return await json.json();
  };

  return (
    <div className="md:pt-[9%] pt-[68%] md:px-[25%] px-0">
      <form
        className="text-center bg-black rounded-lg bg-opacity-60"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="border border-stone-900 p-2 m-2 md:w-1/2 w-3/4 rounded-xl"
          type="text"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="p-2 m-4 bg-red-600 rounded-md"
          onClick={handleGptSerach}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
