import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY; 
const BASE_URL = "https://api.themoviedb.org/3";

export interface Genre {
  id: number;
  name: string;
}

export const fetchGenres = async (language: string) => {
  const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language, 
    },
  });
  return res.data.genres;
};
