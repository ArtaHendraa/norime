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
                  <p className="overflow-hidden whitespace-nowrap text-ellipsis text-neutral-400">
                    {anime.synopsis}
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
