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
