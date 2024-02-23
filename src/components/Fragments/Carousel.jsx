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
    const animeIds = [36792, 38474, 48316, 48548, 33352, 47917, 48736];
    getCarouselAnime(animeIds, (data) => {
      setCarousel(data);
      setLoading(false);
    });
  }, []);

  // const formatDate = (airedDate) => {
  //   const parsedDate = new Date(airedDate);
  //   const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  //   return parsedDate.toLocaleDateString("en-GB", options);
  // };

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
                        <div className="flex items-center gap-1 mt-1">
                          {/* {formatDate(carouselItem.aired.from)} */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>

                          <p className="text-base">{carouselItem.score}</p>
                        </div>
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
