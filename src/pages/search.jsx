import MainLayout from "../components/Layouts/MainLayout";
import SearchBar from "../components/Elements/Search/index";
import Loading from "../components/Elements/Loading/loading";
import { getAnimeGenresList } from "../services/anime.service";
import { useEffect, useState } from "react";
import Footer from "../components/Fragments/Footer";
import ColContentCard from "../components/Elements/ContentCard/ColContentCard";
import Banner from "../components/Elements/Banner/Banner";

const SearchPage = () => {
  const [genresAnime, setGenresAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [animeSearch, setAnimeSearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAnimeGenresList((data) => {
      setGenresAnime(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&sfw=true`
    ).then((res) => res.json());
    setAnimeSearch(temp.data);
    setLoading(false);
  };

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
            setSearch={setSearch}
          />
          <ColContentCard searchAnime={animeSearch} />

          <h1 className="mt-3 text-2xl font-semibold text-center">Genre</h1>
          <section className="flex flex-wrap justify-start gap-3 px-4 mt-2">
            {genresAnime.map((genre) => (
              <a
                key={genre.mal_id}
                href={`genre/${genre.mal_id}/${genre.name.replace(/ /g, "_")}`}
              >
                <Banner classname="bg-neutral-700">{genre.name}</Banner>
              </a>
            ))}
          </section>

          <Footer classname="" />
        </MainLayout>
      )}
    </>
  );
};

export default SearchPage;
