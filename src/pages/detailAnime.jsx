/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { getDetailAnime, getEpisodeAnime } from "../services/anime.service";
import { useEffect, useState } from "react";
import Loading from "../components/Elements/Loading/loading";
import MainLayout from "../components/Layouts/MainLayout";
import Button from "../components/Elements/Button/Button";
import Hading from "../components/Elements/Hading/Hading";
import EpisodeButton from "../components/Elements/Button/EpisodeBtn";
import Footer from "../components/Fragments/Footer";

const DetailAnime = () => {
  const { mal_id } = useParams();
  const [detail, setDetail] = useState({});
  const [episodes, setEpisode] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetailAnime(mal_id, (data) => {
      setDetail(data);
      setLoading(false);
    });
  }, [mal_id]);

  useEffect(() => {
    setLoading(true);
    getEpisodeAnime(mal_id, (data) => {
      setEpisode(data);
    });
  }, [mal_id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainLayout classname="px-2 py-3 xl:w-4/5 mx-auto xl:bg-[#0f0f0f] xl:border-x xl:border-[rgba(255,255,255,.08)]">
            <div className="relative overflow-hidden pt-[56.25%] rounded-sm">
              {detail.trailer && detail.trailer.embed_url ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${detail.trailer.embed_url}?autoplay=0&showinfo=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <Hading classname="absolute inset-0 flex items-center justify-center w-full h-full font-semibold capitalize bg-red-950 text-neutral-400">
                  trailer not found
                </Hading>
              )}
            </div>

            <div className="px-2">
              <Hading classname="mt-3 text-2xl font-semibold text-neutral-100">
                {detail.title}
              </Hading>
              <Hading classname="text-sm text-[#ece48b] mb-3">
                {detail.title_japanese}
              </Hading>
              <Synopsis detail={detail} />
              <Episode episodes={episodes} />
            </div>
            <Footer />
          </MainLayout>
        </>
      )}
    </div>
  );
};

const Synopsis = (props) => {
  const { detail } = props;
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <>
      <Hading>synopsis</Hading>
      <p className="text-neutral-400">
        {detail.synopsis &&
          (showFullText ? detail.synopsis : detail.synopsis.slice(0, 200))}
        {!showFullText && detail.synopsis && detail.synopsis.length > 200 ? (
          <span>...</span>
        ) : (
          ""
        )}
      </p>
      {detail.synopsis.length > 200 && (
        <Button classname="text-[#ece48b] my-1" onClick={toggleText}>
          {showFullText ? "Read Less" : "Read More"}
        </Button>
      )}
    </>
  );
};

const Episode = (props) => {
  const { episodes } = props;
  const [episodesToShow, setEpisodesToShow] = useState(5);
  const loadMoreEpisodes = () => {
    setEpisodesToShow((prev) => prev + 5);
  };
  const formatDate = (airedDate) => {
    const parsedDate = new Date(airedDate);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return parsedDate.toLocaleDateString("en-GB", options);
  };
  return (
    <MainLayout classname="flex flex-col mt-5 gap-y-3">
      <Hading classname="text-xl capitalize text-neutral-100">
        {episodes.length} episodes
      </Hading>
      {episodes.length > 0 && (
        <>
          {episodes.slice(0, episodesToShow).map((episode, index) => (
            <EpisodeButton
              key={`episode ${index + 1}`}
              episode={episode.mal_id}
              title={episode.title}
              date={formatDate(episode.aired)}
            />
          ))}
          {episodes.length > episodesToShow && (
            <Button
              classname="text-[#ece48b] font-semibold capitalize bg-[#1c1d22] py-2 text-center rounded-lg"
              onClick={loadMoreEpisodes}
            >
              view more
            </Button>
          )}
        </>
      )}
    </MainLayout>
  );
};

export default DetailAnime;
