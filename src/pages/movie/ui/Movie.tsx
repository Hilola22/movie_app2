import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "@/features/movie-sort";
import { MovieFilter } from "@/features/movie-filter";
import { MovieDateFilter } from "../../../features/movie-date-filter/ui/MovieDateFilter";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const start_year = searchParams.get("start_year");
  const end_year = searchParams.get("end_year");

  const params = {
    page,
    sort_by,
    ...(start_year && { "primary_release_date.gte": `${start_year}-01-01` }),
    ...(end_year && { "primary_release_date.lte": `${end_year}-12-31` }),
  };

  const { data } = getMovies(params);

  return (
    <div className="">
      <div className="container flex lg:flex-row md:flex-row flex-col py-5 gap-5 lg:gap-15 lg:items-center">
        <MovieSort />
        <MovieFilter />
        <MovieDateFilter />
      </div>
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_results} />
    </div>
  );
});