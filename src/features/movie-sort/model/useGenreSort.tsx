import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const useGenres = (language: string) => {
  return useQuery({
    queryKey: ["genres", language],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: { api_key: API_KEY, language },
      });
      return res.data.genres as Genre[];
    },
    staleTime: 1000 * 60 * 5,
  });
};
