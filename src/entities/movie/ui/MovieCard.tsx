import { createImageUrl } from "@/shared/utils";
import { memo, useState, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../../../features/bookmark";
import type { RootState } from "../../../app/store";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const savedMovie = useSelector((state: RootState) => state.bookmark.value);

  return (
    <>
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

        {movie.release_date && (
          <span
            className="absolute top-3 left-3 bg-red-600/90 text-white 
             text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg"
          >
            {Number(movie.release_date?.split("-")[0]) > 2025
              ? `${movie.release_date?.split("-")[0]} soon`
              : movie.release_date?.split("-")[0]}
          </span>
        )}

        <span
          onClick={(e) => { dispatch(toggleSave(movie)); e.stopPropagation()}}
          className="absolute top-2 right-2 text-white bg-gray-500 dark:bg-gray-700 p-2 rounded-full"
        >
          {savedMovie.some((mov) => mov.id === movie.id) ? (
            <FaBookmark size={20} className="text-red-600" />
          ) : (
            <FaRegBookmark size={20} />
          )}
        </span>

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
    </>
  );
});
