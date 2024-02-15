import { useParams } from "react-router-dom";
import { getDetailAnime } from "../services/anime.service";
import { useEffect, useState } from "react";
import Loading from "../components/Elements/Loading/loading";
import MainLayout from "../components/Layouts/MainLayout";

const DetailAnime = () => {
  const { mal_id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the API call

    getDetailAnime(mal_id, (data) => {
      if (data) {
        setDetail(data.data);
        setLoading(false); // Set loading to false when data is received
      }
    });
  }, [mal_id]);

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
              <h1 className="text-2xl mt-3 mb-2 text-neutral-50 font-semibold">
                {detail.title}
              </h1>
              <p className="text-neutral-200">{detail.synopsis}</p>
            </div>
          </MainLayout>
        </>
      )}
    </div>
  );
};

export default DetailAnime;
