/* eslint-disable react-hooks/exhaustive-deps */
import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const HomePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/seasons/now?filter=tv",
    limit: 24,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(500)]);

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const savedPage = 1;
    fetchData(savedPage);
  }, []);

  const fetchData = async (page) => {
    try {
      const { data } = await getAnime(page, apiConfig);
      setAnime(data || []);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  return (
    <MainLayout>
      <div className="overflow-hidden my-4" ref={emblaRef}>
        <div className="flex">
          {anime.map((anime, index) => (
            <div
              className="embla__slide cursor-grab active:cursor-grabbing flex gap-5 px-5"
              key={index}
            >
              <img src={anime.images.webp.image_url} className="" alt="" />
              <div>
                <h1 className="text-xl">{anime.title}</h1>
                <p>{anime.synopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DisplayAnime getAnime={getAnime} apiConfig={apiConfig} />
    </MainLayout>
  );
};

export default HomePage;
