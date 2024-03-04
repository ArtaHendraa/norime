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
    const sortedData = data.data.sort((a, b) => a.rank - b.rank);
    return {
      data: sortedData || [],
      totalPages: totalPages || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const getCarouselAnime = async (ids, callback, retryAttempt = 0) => {
  const backoffDelay = 60 * 1000;
  const fetchPromises = ids.map(async (id, index) => {
    await new Promise((resolve) => setTimeout(resolve, index * 1000)); // Delay 1s each
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.warn(`Rate limited for ID ${id}. Retrying after a delay...`);
        await new Promise((resolve) => setTimeout(resolve, backoffDelay));
        return getCarouselAnime([id], callback, retryAttempt + 1);
      } else {
        console.error(`Error fetching carousel data for ID ${id}:`, error);
        throw error;
      }
    }
  });

  try {
    const data = await Promise.all(fetchPromises);
    callback(data);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
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
