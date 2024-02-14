import { useParams } from "react-router-dom";
import { getDetailAnime } from "../services/anime.service";
import { useEffect, useState } from "react";
import Loading from "../components/Elements/Loading/loading";

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
      <h1>Anime Details for ID: {mal_id}</h1>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="relative overflow-hidden pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${detail.trailer.embed_url}autoplay=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h2>Title: {detail.title}</h2>
          <p>Synopsis: {detail.synopsis}</p>
          <img src={detail.images.webp.image_url} alt="" />
        </>
      )}
    </div>
  );
};

export default DetailAnime;
