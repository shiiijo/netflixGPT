import React from "react";
import { API_OPTNS } from "../utils/constants";

const BrowseVidBackground = ({ id }) => {
  const [videokey, setVideoKey] = React.useState(null);

  const getBackgroundVideo = async (videoId) => {
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
    <div className="absolute top-40 left-0 -z-20">
      <iframe
        height={700}
        width={1900}
        src={`https://www.youtube.com/embed/${videokey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BrowseVidBackground;
