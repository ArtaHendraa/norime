/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getCarouselAnime } from "../../services/anime.service";
import Loading from "../Elements/Loading/loading";

const Carousel = () => {
  const [loading, setLoading] = useState(false);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    setLoading(true);
    const animeIds = [38474, 32281, 55791, 33352, 54714, 49458, 48736]; // Replace with the desired array of IDs
    getCarouselAnime(animeIds, (data) => {
      setCarousel(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {carousel.map((carouselItem, index) => (
            <SwiperSlide key={index + 1}>
              <a href={`anime/${carouselItem.mal_id}`}>
                <main className="flex justify-between items-end bg-[#141518] relative">
                  <div className="hidden w-full h-full xl:flex xl:items-end absolute carousel-shadow">
                    <img
                      className="w-auto object-contain object-left m-4 rounded-md"
                      src={carouselItem.images.webp.image_url}
                      alt={carouselItem.title}
                    />
                    <div className="block px-3 pb-4">
                      <p className="capitalize bg-[#ece48b] inline-block text-black font-semibold px-2 rounded-sm">
                        recommend
                      </p>
                      <h1 className="xl:text-3xl font-bold">
                        {carouselItem.title}
                      </h1>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="block px-3 pb-4 absolute bottom-1">
                      <p className="capitalize bg-[#ece48b] inline-block text-black font-semibold px-2 rounded-sm">
                        recommend
                      </p>
                      <h1 className="xl:text-3xl font-bold text-neutral-200">
                        {carouselItem.title}
                      </h1>
                    </div>
                    <img
                      className="w-full md:h-[500px] object-contain object-right"
                      src={carouselItem.trailer.images.maximum_image_url}
                      alt={carouselItem.title}
                    />
                  </div>
                </main>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
