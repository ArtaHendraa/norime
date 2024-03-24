/* eslint-disable no-useless-catch */
import axios from "axios";
import rateLimit from "axios-rate-limit";

const api = axios.create();

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
    return {
      data: data.data || [],
      totalPages: totalPages || 0,
    };
  } catch (error) {
    throw error;
  }
};

const apiWithRateLimit = rateLimit(api, {
  maxRequests: 3,
  perMilliseconds: 1000,
});
export const getCarouselAnime = async (ids, callback, retryAttempt = 0) => {
  const backoffDelay = 60 * 1000;
  const fetchPromises = ids.map(async (id) => {
    // await new Promise((resolve) => setTimeout(resolve, index * 500));
    try {
      const response = await apiWithRateLimit.get(
        `https://api.jikan.moe/v4/anime/${id}`
      );
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

export const getDetailAnime = async (mal_id, callback) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${mal_id}/full`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getEpisodeAnime = async (mal_id, callback) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${mal_id}/episodes`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeGenresList = async (callback) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/genres/anime`);
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeGenre = async (page, apiConfig, mal_id) => {
  const { baseURL, limit } = apiConfig;
  const itemsPerPage = limit || 24;
  try {
    const response = await axios.get(
      `${baseURL}${mal_id}&limit=${itemsPerPage}&page=${page}`
    );
    const data = response.data;
    if (!data || !data.data || !data.pagination || !data.pagination.items) {
      throw new Error("Invalid API response format");
    }
    const totalItems = data.pagination.items.total;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return {
      data: data.data || [],
      totalPages: totalPages || 0,
    };
  } catch (error) {
    throw error;
  }
};

// const getAnimeBySearch = async (query) => {
//   try {
//     const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`);
//     SetAnimeList(response.data.results);
//   } catch (error) {
//     console.error('Error fetching anime:', error);
//   }
// };
