/* eslint-disable no-useless-catch */
import axios from "axios";
import rateLimit from "axios-rate-limit";
const api = axios.create();

const apiWithRateLimit = rateLimit(api, {
  maxRequests: 1,
  perMilliseconds: 1000,
});

export const getAnime = async (page, apiConfig) => {
  const { baseURL, limit } = apiConfig;
  const itemsPerPage = limit || 24;
  try {
    const response = await apiWithRateLimit.get(
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

export const getCarouselAnime = async (callback) => {
  try {
    const response = await apiWithRateLimit.get(
      `https://api.jikan.moe/v4/seasons/upcoming?limit=6`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getDetailAnime = async (mal_id, callback) => {
  try {
    const response = await apiWithRateLimit.get(
      `https://api.jikan.moe/v4/anime/${mal_id}/full`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getEpisodeAnime = async (mal_id, callback) => {
  try {
    const response = await apiWithRateLimit.get(
      `https://api.jikan.moe/v4/anime/${mal_id}/episodes`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeGenresList = async (callback) => {
  try {
    const response = await apiWithRateLimit.get(
      `https://api.jikan.moe/v4/genres/anime`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeGenre = async (page, apiConfig, mal_id) => {
  const { baseURL, limit } = apiConfig;
  const itemsPerPage = limit || 24;
  try {
    const response = await apiWithRateLimit.get(
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

export const getManga = async (callback) => {
  try {
    const response = await apiWithRateLimit.get(
      `https://animev1.bimabizz.my.id/api/komiku`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};
