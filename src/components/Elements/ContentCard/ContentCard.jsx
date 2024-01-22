/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ContentCard = (props) => {
  const { topAnime } = props;

  return (
    <>
      {topAnime.map((anime) => (
        <Link to={anime.url} key={anime.title} className="group w-[99%]">
          <div>
            <div className="w-full h-auto mx-auto relative overflow-hidden rounded-lg">
              <div className="absolute flex items-center justify-center bg-black w-full h-full group-hover:opacity-60 opacity-0 duration-300 hover:scale-150 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-1/4 h-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
              <div className="absolute bg-[#ece48b] px-3 rounded-br-lg flex justify-center items-center">
                <h1 className="text-[#1b1b1b] font-bold capitalize xl:text-lg text-xs">
                  {anime.rank ? `rank ${anime.rank}` : `${anime.type}`}
                </h1>
              </div>
              <img
                className="w-full h-auto bg-cover rounded-lg"
                loading="lazy"
                src={anime.images.webp.image_url}
                alt={anime.title}
              />
            </div>
            <div className="font-semibold mt-1">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[#ece48b] text-neutral-200 duration-300">
                {anime.title}
              </p>
              <p className="text-neutral-500 text-sm">
                {anime.aired.prop.from.year}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ContentCard;
