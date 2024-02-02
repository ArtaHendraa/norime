import DisplayAnime from "../components/Layouts/DisplayAnime";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import { getAnime } from "../services/getAnime.service.js";

const SeriesPage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?type=tv",
    limit: 24,
  };

  return (
    <MainLayout>
      <DisplayAnime title="series" getAnime={getAnime} apiConfig={apiConfig} />
    </MainLayout>
  );
};

export default SeriesPage;
