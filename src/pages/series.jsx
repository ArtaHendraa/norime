import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";

const SeriesPage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?type=tv",
    limit: 24,
  };

  return (
    <>
      <DisplayAnime title="series" getAnime={getAnime} apiConfig={apiConfig} />
    </>
  );
};

export default SeriesPage;
