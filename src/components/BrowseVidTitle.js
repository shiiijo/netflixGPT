import React from "react";
import { Play, Info } from "lucide-react";

const BrowseVidTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-96 left-0 z-20 px-20 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-semibold py-4 text-white">{title}</h1>
      <p className="w-1/4 text-white text-xl">{overview}</p>
      <div className="flex flex-row mt-10">
        <button className="font-bold bg-white text-center p-2 rounded-md mr-2 flex flex-row">
          <Play className="mr-1" /> Play
        </button>
        <button className="font-bold bg-slate-500 text-center p-2 bg-opacity-60 rounded-md flex flex-row text-white">
          <Info className="mr-1" /> More info
        </button>
      </div>
    </div>
  );
};

export default BrowseVidTitle;
