import { MovieInfo, useMovie } from "@/entities/movie"
import { MovieList } from "@/widgets/movie-list"
import { memo } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Title } from "@/shared/ui/title/Title"
import "@/app/i18n";
import { useTranslation } from "react-i18next"

export const MovieDetail = memo(() => {
  const {id} = useParams()
  const {getMovieInfo} = useMovie()
  const { data } = getMovieInfo(id as string, "similar")
  const {t} = useTranslation()
   
  
  return (
    <div>
      <MovieInfo id={id as string} />
      <Outlet />
      <Title className="container">{t("movies-detail.similar")}</Title>
      <MovieList movies={data?.results?.slice(0, 8)} />
    </div>
  );
})
