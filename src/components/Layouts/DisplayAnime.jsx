/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Loading from "../Elements/Loading/loading";
import MainLayout from "../Layouts/MainLayout";
import ContentCard from "../Elements/ContentCard/ContentCard";
import Pagination from "../Elements/Pagination/Pagination";
import ContentLayout from "./ContentLayout";

const DisplayAnime = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cachedPages, setCachedPages] = useState({});
  const { getAnime, apiConfig, title } = props;

  useEffect(() => {
    const savedPage = parseInt(localStorage.getItem("currentPage")) || 1;
    setCurrentPage(savedPage);
    fetchData(savedPage);
  }, []);

  const fetchData = async (page) => {
    setLoading(true);

    try {
      if (cachedPages[page]) {
        const cachedData = cachedPages[page];
        setTopAnime(cachedData.data);
        setTotalPages(cachedData.totalPages);
      } else {
        const { data, totalPages } = await getAnime(page, apiConfig);
        setTopAnime(data || []);
        setTotalPages(totalPages || 0);

        setCachedPages((prev) => ({ ...prev, [page]: { data, totalPages } }));
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  };

  const loadPage = (pageNumber) => {
    if (!loading && pageNumber >= 1 && pageNumber <= totalPages) {
      document.body.style.overflow = "hidden";
      setCurrentPage(pageNumber);
      fetchData(pageNumber);
      window.scrollTo({ top: 0 });
    }
  };

  const loadNextPage = () => {
    loadPage(currentPage + 1);
  };

  const loadPrevPage = () => {
    loadPage(currentPage - 1);
  };

  const displayedPages = 24;
  const calculateDisplayedPages = () => {
    const startPage = Math.max(currentPage - Math.floor(displayedPages / 2), 1);
    const endPage = Math.min(startPage + displayedPages - 1, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <MainLayout>
        {!loading && (
          <ContentLayout title={title}>
            <ContentCard topAnime={topAnime} />
          </ContentLayout>
        )}
        {!loading && (
          <Pagination
            calculateDisplayedPages={calculateDisplayedPages}
            currentPage={currentPage}
            totalPages={totalPages}
            loadPrevPage={loadPrevPage}
            loadNextPage={loadNextPage}
            loadPage={loadPage}
          />
        )}
      </MainLayout>
    </>
  );
};

export default DisplayAnime;
