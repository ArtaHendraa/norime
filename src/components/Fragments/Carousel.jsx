/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getCarouselAnime } from "../../services/anime.service";

const Carousel = () => {
  const [loading, setLoading] = useState(false);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    setLoading(true);
    const animeIds = [52991, 32281, 38329]; // Replace with the desired array of IDs
    getCarouselAnime(animeIds, (data) => {
      setCarousel(data);
      setLoading(false);
    });
  }, []);

  console.log(`data`, carousel);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {carousel.map((carouselItem, index) => (
            <SwiperSlide key={index + 1}>
              <div className="relative">
                <img
                  src={carouselItem.trailer.images.maximum_image_url}
                  alt={carouselItem.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
