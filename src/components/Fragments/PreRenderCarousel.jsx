import Banner from "../Elements/Banner/Banner";
import Hading from "../Elements/Hading/Hading";

const PreRenderCarousel = () => {
  return (
    <section className="blur-sm">
      <main className="flex justify-between items-end bg-[#141518] relative">
        <div className="absolute w-full h-full xl:flex xl:items-end carousel-shadow-sm md:carousel-shadow-md xl:carousel-shadow-xl">
          <img
            className="hidden object-contain object-left w-auto m-4 rounded-md xl:block"
            src="/carousel.webp"
            alt=""
          />
          <div className="flex flex-col items-start justify-end h-full px-3 pb-4">
            <div className="w-full">
              <Banner classname="bg-[#ece48b] text-[#141518] text-[0.563rem]">
                recommend
              </Banner>
              <Hading classname="w-3/4 overflow-hidden text-xl font-bold md:w-full text-neutral-100 xl:text-3xl whitespace-nowrap text-ellipsis">
                Eromanga-sensei OVA
              </Hading>
              <Hading classname="hidden md:block text-sm text-[#ece48b] whitespace-nowrap overflow-hidden text-ellipsis">
                エロマンガ先生 OVA
              </Hading>
            </div>

            <div className="flex items-center gap-2 text-xs md:text-base">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>

                <p>2019</p>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p>6.79</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-1 mb-1">
              <Banner classname="bg-[#444547] text-[0.563rem] text-neutral-100">
                Comedy
              </Banner>
              <Banner classname="bg-[#444547] text-[0.563rem] text-neutral-100">
                Romance
              </Banner>
              <Banner classname="bg-[#444547] text-[0.563rem] text-neutral-100">
                Ecchi
              </Banner>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-full md:h-[31.25rem] sm:object-contain md:object-cover xl:object-contain object-right"
            loading="lazy"
            src="/carousel-bg.webp"
            alt=""
          />
        </div>
      </main>
    </section>
  );
};

export default PreRenderCarousel;
