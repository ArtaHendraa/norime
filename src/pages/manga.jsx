import { useEffect, useState } from "react";
import { getManga } from "../services/anime.service";
import Loading from "../components/Elements/Loading/loading";
import ContentLayout from "../components/Layouts/ContentLayout";
import { Link } from "react-router-dom";

const MangaPage = () => {
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getManga((data) => {
      setManga(data);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    });
  }, []);

  console.log(manga);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ContentLayout title="new update" className="grid-cols-1">
            {manga.map((manga, index) => (
              <Link
                to={`/manga/${manga.title.replace(/ /g, "-")}`}
                key={index + 1}
                className="w-full group"
              >
                <div className="relative w-full h-auto mx-auto overflow-hidden rounded-lg">
                  <div className="absolute z-10 flex items-center justify-center w-full h-full duration-300 bg-black opacity-0 group-hover:opacity-60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-1/4 h-auto duration-300 group-hover:scale-150"
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
                  <img
                    className="w-full h-full bg-cover rounded-lg"
                    loading="lazy"
                    src={manga.thumbnail}
                    alt={manga.title}
                  />
                </div>
                <div className="mt-1 font-semibold">
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[#ece48b] text-neutral-200 duration-300">
                    {manga.title}
                  </p>
                  {/* <p className="text-sm text-neutral-500">
                    {manga.aired.prop.from.year}
                  </p> */}
                </div>
              </Link>
            ))}
          </ContentLayout>
        </>
      )}
    </div>
  );
};

export default MangaPage;
