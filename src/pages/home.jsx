/* eslint-disable react-hooks/exhaustive-deps */
import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";
import MainLayout from "../components/Layouts/MainLayout.jsx";

const HomePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/seasons/now?filter=tv",
    limit: 24,
  };

  return (
    <MainLayout>
      <DisplayAnime getAnime={getAnime} apiConfig={apiConfig} />
    </MainLayout>
  );
};

export default HomePage;
