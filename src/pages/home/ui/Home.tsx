import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Hero } from "@/widgets/hero";

export const Home = memo(() => {
  document.title = "Movies App";
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return <div>
    <Hero/>
    <MovieList movies={data?.results?.slice(0, 4)}/>
  </div>;
});
