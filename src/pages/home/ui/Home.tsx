import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Hero } from "@/widgets/hero";
import { Loading } from "@/entities/loading";

export const Home = memo(() => {
  document.title = "Movies App";
  const {getMovies} = useMovie()
  const {data, isLoading} = getMovies()
  
  return <div>
    {isLoading && <Loading/>}
    <Hero/>
    <MovieList movies={data?.results?.slice(0, 4)}/>
  </div>;
});
