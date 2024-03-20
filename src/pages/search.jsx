import MainLayout from "../components/Layouts/MainLayout";
import SearchBar from "../components/Elements/Search/index";
import Loading from "../components/Elements/Loading/loading";
import { getAnimeBySearch } from "../services/anime.service";
import { useEffect, useState } from "react";
import Footer from "../components/Fragments/Footer";

const SearchPage = () => {
  const handleSearch = () => {
    alert("test");
  };

  const [searchAnime, setSearchAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAnimeBySearch((data) => {
      setSearchAnime(data);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MainLayout>
          <SearchBar
            type="text"
            placeholder="Search..."
            classname="w-full h-10"
            onClick={handleSearch}
          />
          <section className="flex flex-col items-start justify-center gap-3 px-4">
            {searchAnime.map((anime, index) => (
              <a
                key={index + 1}
                href={`anime/${anime.mal_id}/${anime.title.replace(/ /g, "_")}`}
                className="flex items-start w-full gap-2 pb-3 border-b border-neutral-800"
              >
                <img
                  className="w-20 rounded-md"
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                />

                <div className="overflow-hidden">
                  <h1 className="font-semibold text-neutral-200">
                    {anime.title}
                  </h1>
                  <p className="overflow-hidden whitespace-nowrap text-ellipsis text-neutral-300">
                    {anime.synopsis}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-neutral-300">
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
                    <p>{anime.score}</p>
                  </div>
                  <p className="text-sm text-neutral-300">
                    {anime.episodes} episodes
                  </p>
                </div>
              </a>
            ))}
          </section>
          <Footer />
        </MainLayout>
      )}
    </>
  );
};

export default SearchPage;
