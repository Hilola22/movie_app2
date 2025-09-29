  import { memo, useState } from "react";
  import { useSearchMovie } from "@/features/search-movie/model/useSearchMovie";
  import { MovieList } from "@/widgets/movie-list";
  import { Empty, Input } from "antd";
  import { IoSearchOutline } from "react-icons/io5";
  import useDebounce from "@/shared/hooks/useDebounce";
  import { Loading } from "@/entities/loading";

  export const SearchMovie = memo(() => {
    const [value, setValue] = useState("");
    const { getMovieBySearch } = useSearchMovie();
    const debounceValue = useDebounce(value, 800);
    const { data, isLoading } = getMovieBySearch({ query: debounceValue });

    const filteredMovies = (data?.results || []).filter(
      (movie: any) =>
        !movie.genre_ids.some((id: number) =>
          [18, 36, 27, 10402, 10749, 35, 53, 10770, 10749, 99].includes(id)
        )
    );

    const isEmpty =
      !isLoading && debounceValue.trim() !== "" && filteredMovies.length === 0;

    return (
      <div>
        <div className="container py-5 flex justify-center">
          <Input
            onChange={(e) => setValue(e.target.value)}
            prefix={<IoSearchOutline className="text-gray-400 mr-1" />}
            placeholder="Search Movie..."
            className="
          max-w-[500px] w-full h-[50px]
          rounded-full border border-gray-300
          bg-white px-5 text-[16px]
          shadow-sm
          focus:border-blue-500 focus:shadow-md
          transition-all duration-200
        "
          />
        </div>
        {filteredMovies.length > 0 && <MovieList movies={filteredMovies} />}

        {isLoading && <Loading />}

        {isEmpty && <Empty description={<span className="text-white">No search data</span>} className="mt-10" />}
      </div>
    );
  });
