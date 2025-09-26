import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group relative bg-white dark:bg-slate-900 rounded-[12px] overflow-hidden 
                 shadow-md hover:shadow-xl lg:hover:scale-[1.02] transition cursor-pointer"
    >
      <div className="w-full lg:h-[340px] h-[200px]">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      {
        movie.release_date &&  <span
        className="absolute top-3 left-3 bg-red-600/90 text-white 
                   text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg"
      >
        {movie.release_date?.split("-")[0]}
      </span>
     }

      <div className="p-4">
        <h3
          className="text-base md:text-lg font-semibold line-clamp-1 text-gray-900 dark:text-gray-100"
          title={movie.title}
        >
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
          {movie.original_language?.toUpperCase() || "N/A"}
          {" • "}
          {movie?.original_title}
        </p>

        <p className="mt-1 text-sm text-yellow-500 font-semibold">
          ⭐ {movie.vote_average?.toFixed(1)}
        </p>
      </div>
    </div>
  );
});
