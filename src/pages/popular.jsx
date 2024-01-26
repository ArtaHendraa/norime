import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";

const PopularPage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?",
    limit: 24,
  };

  return (
    <>
      <DisplayAnime
        title="top anime"
        getAnime={getAnime}
        apiConfig={apiConfig}
      />
    </>
  );
};

export default PopularPage;
