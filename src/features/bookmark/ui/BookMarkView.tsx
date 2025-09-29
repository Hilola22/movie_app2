import { memo } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../../app/store"
import { MovieList } from "../../../widgets/movie-list"
import { Empty } from "antd"

export const BookMarkView = memo(() => {
    const savedMovie = useSelector((state: RootState) => state.bookmark.value)
  return (
    <div>
      {!savedMovie || savedMovie.length === 0 ? (
        <Empty
          className="pt-10"
          description={<span className="text-white">No bookmarks yet</span>}/>
      ) : (
        <MovieList movies={savedMovie} />
      )}
    </div>
  );
})
