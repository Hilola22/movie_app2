import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { Title } from "@/shared/ui/title/Title";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo(({ id }) => {
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  const primary = "from-red-600 to-black"; 
  const secondary = "from-gray-800 to-gray-600";

  return (
    <div className="bg-gray-50 dark:bg-black  text-gray-800 dark:text-white">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end justify-start">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt={data?.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="container relative z-10 p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            {data?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base">
            <span className="bg-black/50 px-3 py-1 rounded-md border border-white/20">
              Release: {data?.release_date?.split("-")[0]}
            </span>
            <span className="bg-black/50 px-3 py-1 rounded-md border border-white/20">
              ⭐ {data?.vote_average?.toFixed(1)}
            </span>
            {data?.runtime && (
              <span className="bg-black/50 px-3 py-1 rounded-md border border-white/20">
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            {data?.budget ? (
              <p className="text-lg font-semibold text-white">
                💸Budget: {data.budget.toLocaleString()} USD
              </p>
            ) : null}

            {data?.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-r from-red-600 to-black hover:scale-105 transition rounded-full text-white font-medium shadow-lg"
              >
                Official Site
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={createImageUrl(data?.poster_path)}
              alt={data?.title}
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="md:flex-1 space-y-4">
            <Title>Movie Details</Title>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data?.overview || "No description available."}
            </p>

            {data?.genres && (
              <div className="flex flex-wrap gap-2">
                {data.genres.map((g: any) => (
                  <span
                    key={g.id}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-white"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 lg: gap-4 text-gray-800 dark:text-gray-200 mt-6">
              {data?.production_countries && (
                <p>
                  <span className="font-semibold">Country:</span>{" "}
                  {data.production_countries.map((c: any) => c.name).join(", ")}
                </p>
              )}
              <p>
                <span className="font-semibold">Language:</span>{" "}
                {data?.original_language?.toUpperCase()}
              </p>
              <p>
                <span className="font-semibold">Popularity:</span>{" "}
                {data?.popularity?.toFixed(0)}
              </p>
              <p>
                <span className="font-semibold">Votes:</span> {data?.vote_count}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <Title>Gallery</Title>
        <div className="flex gap-4 overflow-x-auto pb-3 mt-4">
          {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <Image
              key={inx}
              className="min-w-[200px] md:max-w-[300px] lg:max-w-[250px] min-h-[100px] max-h-[150px] rounded-lg shadow-lg hover:scale-105 transition"
              src={createImageUrl(item.file_path)}
              alt=""
              preview={false}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-10 mb-3">
        <Title>More Information</Title>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            to="review"
            className={`px-5 py-2 bg-gradient-to-r ${primary} text-white rounded-full hover:scale-105 transition shadow-md`}
          >
            Reviews
          </Link>
          <Link
            to="cast"
            className={`px-5 py-2 bg-gradient-to-r ${secondary} text-white rounded-full hover:scale-105 transition shadow-md`}
          >
            Cast
          </Link>
          <Link
            to="other"
            className="px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full hover:scale-105 transition shadow-md"
          >
            Others
          </Link>
        </div>
      </section>
    </div>
  );
});
