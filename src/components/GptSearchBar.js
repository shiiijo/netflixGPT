import React from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = React.useRef(null);

  const handleGptSerach = async () => {
    const query = `Act as a movie recomendation system & suggest 5 movies for the query ${searchText.current.value} and give only names of movies as comma seperated.`;

    const results = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(results.choices);
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
