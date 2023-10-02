import React from "react";
import { API_OPTNS } from "../utils/constants";
import { useSelector } from "react-redux";

const BrowseVidBackground = ({ id }) => {
  const [videokey, setVideoKey] = React.useState(null);

  const getBackgroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTNS
    );
    const json = await data.json();

    const trailers = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    const trailer = trailers[0];
    setVideoKey(trailer.key);
  };

  React.useEffect(() => {
    getBackgroundVideo();
  }, []);

  return (
    <div className="pt-[65%] md:pt-0">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videokey}?autoplay=1&rel=0&mute=1&controls=0&modestbranding=1&loop=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BrowseVidBackground;
