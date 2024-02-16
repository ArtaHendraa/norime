import { useParams } from "react-router-dom";
import { getDetailAnime, getEpisodeAnime } from "../services/anime.service";
import { useEffect, useState } from "react";
import Loading from "../components/Elements/Loading/loading";
import MainLayout from "../components/Layouts/MainLayout";

const DetailAnime = () => {
  const { mal_id } = useParams();
  const [detail, setDetail] = useState({});
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the API call

    getDetailAnime(mal_id, (data) => {
      if (data) {
        setDetail(data.data);
        setLoading(false); // Set loading to false when data is received
      }
    });

    getEpisodeAnime(mal_id, (data) => {
      if (data && Array.isArray(data.data)) {
        // Check if data is an array
        setEpisode(data.data);
      }
      setLoading(false);
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
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${detail.trailer.embed_url}?autoplay=0&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
                  {showFullText
                    ? detail.synopsis
                    : detail.synopsis.slice(0, 200)}

                  {!showFullText && detail.synopsis.length > 200 ? (
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

              {loading ? (
                <h1 className="capitalize text-xl text-neutral-100">load</h1>
              ) : (
                <div className="flex flex-col gap-y-3 mt-5">
                  <h1 className="capitalize text-xl text-neutral-100">
                    {episode.length} episodes
                  </h1>
                  {episode.map((episode, index) => (
                    <div
                      className="bg-[#0f0f0f] xl:bg-[#221f1f] px-3 py-4 rounded-lg"
                      key={`episode ${index}`}
                    >
                      <h1 className="capitalize">episode {episode.mal_id}</h1>
                      <h1>{episode.title}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </MainLayout>
        </>
      )}
    </div>
  );
};

export default DetailAnime;
