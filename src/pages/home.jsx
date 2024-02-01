import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";

const HomePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/seasons/now?filter=tv",
    limit: 24,
  };

  return (
    <>
      <DisplayAnime
        title="new release"
        getAnime={getAnime}
        apiConfig={apiConfig}
      />
    </>
  );
};

export default HomePage;
