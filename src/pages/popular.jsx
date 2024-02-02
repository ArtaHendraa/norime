import DisplayAnime from "../components/Layouts/DisplayAnime";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import { getAnime } from "../services/getAnime.service.js";

const PopularPage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/top/anime?",
    limit: 24,
  };

  return (
    <MainLayout>
      <DisplayAnime
        title="top anime"
        getAnime={getAnime}
        apiConfig={apiConfig}
      />
    </MainLayout>
  );
};

export default PopularPage;
