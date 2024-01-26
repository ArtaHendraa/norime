import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";

const MoviePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?type=movie",
    limit: 24,
  };

  return (
    <>
      <DisplayAnime title="movie" getAnime={getAnime} apiConfig={apiConfig} />
    </>
  );
};

export default MoviePage;
