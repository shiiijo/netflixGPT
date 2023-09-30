import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { LOGIN_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <img src={LOGIN_BG} alt="bg" className="absolute -z-10" />
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
