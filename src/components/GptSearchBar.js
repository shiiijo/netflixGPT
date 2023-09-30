import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[9%] px-[25%]">
      <form className="text-center bg-black rounded-lg bg-opacity-60">
        <input
          className="border border-stone-900 p-2 m-2 w-1/2 rounded-xl"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="p-2 m-4 bg-red-600 rounded-md">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
