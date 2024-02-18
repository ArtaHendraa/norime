/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = (props) => {
  const { anime } = props;
  return (
    <Swiper
      spaceBetween={0}
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
      className="mySwiper"
    >
      {anime.map((slider, index) => (
        <SwiperSlide key={index + 1}>
          <div className="relative">
            <img src={slider.images.webp.large_image_url} alt={slider.title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
