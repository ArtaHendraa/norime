import MainLayout from "../components/Layouts/MainLayout";
import SearchBar from "../components/Elements/Search/index";
import Loading from "../components/Elements/Loading/loading";
import { getAnimeBySearch } from "../services/anime.service";
import { useEffect, useState } from "react";

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
          <section className="px-4">
            <SearchBar
              type="text"
              placeholder="Search..."
              classname="w-full h-10 "
              onClick={handleSearch}
            />

            <div className="flex flex-wrap items-center justify-around gap-4">
              {searchAnime.map((anime, index) => (
                <div key={index + 1}>
                  <img src={anime.images.webp.image_url} alt="" />
                </div>
              ))}
            </div>
          </section>
        </MainLayout>
      )}
    </>
  );
};

export default SearchPage;
