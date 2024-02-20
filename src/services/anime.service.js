/* eslint-disable no-useless-catch */
import axios from "axios";

export const getAnime = async (page, apiConfig) => {
  const { baseURL, limit } = apiConfig;
  const itemsPerPage = limit || 24;

  try {
    const response = await axios.get(
      `${baseURL}&limit=${itemsPerPage}&page=${page}`
    );
    const data = response.data;

    if (!data || !data.data || !data.pagination || !data.pagination.items) {
      throw new Error("Invalid API response format");
    }

    const totalItems = data.pagination.items.total;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sorting the data based on rank
    const sortedData = data.data.sort((a, b) => a.rank - b.rank);

    return {
      data: sortedData || [],
      totalPages: totalPages || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const getDetailAnime = (mal_id, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/anime/${mal_id}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEpisodeAnime = (mal_id, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/anime/${mal_id}/episodes`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const getCarouselAnime = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.jikan.moe/v4/recommendations/anime`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching carousel data:", error);
//     throw error; // Rethrow the error to handle it in the component
//   }
// };

export const getCarouselAnime = (ids, callback) => {
  // Map over the array of IDs and fetch data for each ID using axios
  const fetchPromises = ids.map((id) =>
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.data.data)
  );

  // Wait for all promises to resolve using Promise.all
  Promise.all(fetchPromises)
    .then((data) => callback(data))
    .catch((error) => console.error("Error fetching carousel data:", error));
};
