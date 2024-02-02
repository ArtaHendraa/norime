/* eslint-disable react-hooks/exhaustive-deps */
import DisplayAnime from "../components/Layouts/DisplayAnime";
import { getAnime } from "../services/getAnime.service.js";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HomePage = () => {
  const apiConfig = {
    baseURL: "https://api.jikan.moe/v4/seasons/now?filter=tv",
    limit: 24,
  };

  const images = [
    "https://t4.ftcdn.net/jpg/04/84/66/01/360_F_484660141_BxpYkEIYA3LsiF3qkqYWyXlNIoFmmXjc.jpg",
    "https://t4.ftcdn.net/jpg/04/84/66/01/360_F_484660141_BxpYkEIYA3LsiF3qkqYWyXlNIoFmmXjc.jpg",
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <MainLayout>
      <div className="overflow-hidden my-4" ref={emblaRef}>
        <div className="flex rounded-lg">
          {images.map((image) => (
            <div className="embla__slide" key={image}>
              <img src={image} className="w-full" alt="" />
            </div>
          ))}
        </div>
      </div>

      <DisplayAnime getAnime={getAnime} apiConfig={apiConfig} />
    </MainLayout>
  );
};

export default HomePage;
