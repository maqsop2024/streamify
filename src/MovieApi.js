import axios from "axios";
const API_KEY = process.env.REACT_APP_API;

const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const browseMovies = async (genreId, rating) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&vote_average.gte=${rating}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
