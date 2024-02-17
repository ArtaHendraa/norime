/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { getDetailAnime, getEpisodeAnime } from "../services/anime.service";
import { useEffect, useState } from "react";
import Loading from "../components/Elements/Loading/loading";
import MainLayout from "../components/Layouts/MainLayout";

const DetailAnime = () => {
  const { mal_id } = useParams();
  const [detail, setDetail] = useState({});
  const [episodes, setEpisode] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the API call

    getDetailAnime(mal_id, (data) => {
      if (data && data.data) {
        setDetail(data.data);
      }
      setLoading(false); // Set loading to false when data is received
    });

    getEpisodeAnime(mal_id, (data) => {
      if (data && Array.isArray(data.data)) {
        // Check if data is an array
        setEpisode(data.data);
      }
      // Do not set loading to false here to ensure it remains true until all data is received
    });
  }, [mal_id]);

  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainLayout classname="px-2 py-3">
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
                <div className="flex items-center justify-center w-full h-full bg-red-950 text-neutral-400 font-semibold absolute inset-0">
                  <p>Trailer not found</p>
                </div>
              )}
            </div>

            <div className="px-2">
              <div className="mt-3 mb-3">
                <h1 className="text-2xl text-neutral-100 font-semibold">
                  {detail.title}
                </h1>
                <h2 className="text-sm text-[#ece48b]">
                  {detail.title_japanese}
                </h2>
              </div>

              <div>
                <h1 className="text-xl text-neutral-100">Synopsis</h1>
                <p className="text-neutral-400">
                  {detail.synopsis &&
                    (showFullText
                      ? detail.synopsis
                      : detail.synopsis.slice(0, 200))}
                  {!showFullText &&
                  detail.synopsis &&
                  detail.synopsis.length > 200 ? (
                    <span>...</span>
                  ) : (
                    ""
                  )}
                </p>

                {detail.synopsis.length > 200 && (
                  <div className="mt-1 mb-3">
                    <button onClick={toggleText} className="text-[#ece48b]">
                      {showFullText ? "Read Less.." : "Read More.."}
                    </button>
                  </div>
                )}
              </div>

              <Episode episodes={episodes} />
            </div>
          </MainLayout>
        </>
      )}
    </div>
  );
};

export default DetailAnime;

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
    <div className="flex flex-col gap-y-3 mt-5">
      <h1 className="capitalize text-xl text-neutral-100">
        {episodes.length} episodes
      </h1>
      {episodes.length > 0 && (
        <>
          {episodes.slice(0, episodesToShow).map((episode, index) => (
            <button
              className="bg-[#141518] px-4 py-4 rounded-lg text-start"
              key={`episode ${index}`}
            >
              <div className="flex items-center justify-between gap-10">
                <div className="overflow-hidden">
                  <h1 className="capitalize text-lg text-neutral-100">
                    episode {episode.mal_id}
                  </h1>
                  <h2 className="text-neutral-300 overflow-hidden whitespace-nowrap text-ellipsis">
                    {episode.title}
                  </h2>
                </div>

                <h2 className="text-neutral-400">
                  {formatDate(episode.aired)}
                </h2>
              </div>
            </button>
          ))}
          {episodes.length > episodesToShow && (
            <div className="bg-[#1c1d22] py-2 text-center rounded-lg">
              <button
                onClick={loadMoreEpisodes}
                className="text-[#ece48b] font-semibold"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
