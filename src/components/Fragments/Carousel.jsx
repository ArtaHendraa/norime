/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getCarouselAnime } from "../../services/anime.service";
import Hading from "../Elements/Hading/Hading";

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

  const formatDate = (airedDate) => {
    const parsedDate = new Date(airedDate);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return parsedDate.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      {loading ? (
        <div className="w-full xl:min-h-[500px] flex items-center justify-center">
          <h1>Load image...</h1>
        </div>
      ) : (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {carousel.map((carouselItem, index) => (
            <SwiperSlide key={index + 1}>
              <section>
                <a href={`anime/${carouselItem.mal_id}`}>
                  <main className="flex justify-between items-end bg-[#141518] relative">
                    <div className="w-full h-full xl:flex xl:items-end absolute xl:carousel-shadow-xl carousel-shadow-sm">
                      <img
                        className="hidden xl:block w-auto object-contain object-left m-4 rounded-md"
                        src={carouselItem.images.webp.image_url}
                        alt={carouselItem.title}
                      />
                      <div className="flex flex-col items-start justify-end h-full px-3 pb-4">
                        <p className="capitalize bg-[#ece48b] text-xs xl:text-sm inline-block text-black font-semibold px-2 rounded-sm">
                          recommend
                        </p>
                        <Hading classname="w-3/4 xl:w-full text-neutral-100 text-xl xl:text-3xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                          {carouselItem.title}
                        </Hading>
                        <Hading classname="hidden md:block text-sm text-[#ece48b] whitespace-nowrap overflow-hidden text-ellipsis w-3/5">
                          {carouselItem.title_japanese}
                        </Hading>
                        <p className="text-sm font-light">
                          {formatDate(carouselItem.aired.from)}
                        </p>
                      </div>
                    </div>

                    <div className="w-full">
                      <img
                        className="w-full md:h-[500px] object-contain object-right"
                        src={carouselItem.trailer.images.maximum_image_url}
                        alt={carouselItem.title}
                      />
                    </div>
                  </main>
                </a>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> */
}
