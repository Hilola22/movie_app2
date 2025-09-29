import { memo } from "react";
import { BookMarkView } from "@/features/bookmark";
import { useMovie } from "@/entities/movie";
import { Loading } from "@/entities/loading";

export const BookMark = memo(() => {
  const { getMovies } = useMovie();
  const { isLoading } = getMovies();
  return (
    <div>
      {isLoading && <Loading />}
      <BookMarkView />
    </div>
  );
});
