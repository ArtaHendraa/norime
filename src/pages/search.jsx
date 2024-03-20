import MainLayout from "../components/Layouts/MainLayout";
import SearchBar from "../components/Elements/Search/index";
import Loading from "../components/Elements/Loading/loading";
import { getAnimeBySearch } from "../services/anime.service";
import { useEffect, useState } from "react";
import Footer from "../components/Fragments/Footer";
import ColContentCard from "../components/Elements/ContentCard/ColContentCard";

const SearchPage = () => {
  const [searchAnime, setSearchAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [animeSearch, setAnimeSearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAnimeBySearch((data) => {
      setSearchAnime(data);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
    console.log(search);
  };

  const FetchAnime = async (query) => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc`
    ).then((res) => res.json());
    console.log(temp.data);
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
          <ColContentCard searchAnime={searchAnime} />
          <Footer />
        </MainLayout>
      )}
    </>
  );
};

export default SearchPage;
