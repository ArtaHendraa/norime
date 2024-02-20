/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useMemo, useState } from "react";
import { getCarouselAnime } from "../../services/anime.service";

const Carousel = ({ anime }) => {
  return (
    <>
      {/* {loading ? (
        " "
      ) : ( */}
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
        {anime.map((anime, index) => (
          <SwiperSlide key={index + 1}>
            <div className="relative">
              <img src={anime.images.webp.large_image_url} alt={anime.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* )} */}
    </>
  );
};

export default Carousel;
