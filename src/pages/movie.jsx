import DisplayAnime from "../components/Layouts/DisplayAnime";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import { getAnime } from "../services/getAnime.service.js";

const MoviePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?type=movie",
    limit: 24,
  };

  return (
    <MainLayout>
      <DisplayAnime title="movie" getAnime={getAnime} apiConfig={apiConfig} />
    </MainLayout>
  );
};

export default MoviePage;
