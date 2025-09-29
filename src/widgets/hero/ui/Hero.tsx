import { useMovie } from "@/entities/movie";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";
import { useNavigate } from "react-router-dom";
import "@/app/i18n";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Loading } from "@/entities/loading";
import { useTranslation } from "react-i18next";

export const Hero = memo(() => {
  const navigate = useNavigate();
  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies();
  const movies = data?.results?.slice(6, 11) || [];
  const {t} = useTranslation()

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="container w-full relative mb-10">
      {isLoading && <Loading />}
      <Swiper
        loop
        spaceBetween={10}
        navigation={{
          nextEl: ".main-next",
          prevEl: ".main-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="max-h-[640px] md:h-[700px] w-full relative rounded-[12px] overflow-hidden"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`slide-${movie.id}`}
              className="w-full h-full object-cover rounded"
            />

            <div className="absolute bottom-4 inset-x-0 flex justify-center px-2">
              <div
                className="backdrop-blur-md bg-black/40 rounded-2xl px-6 py-4
                              flex flex-col items-center text-center text-white max-w-md"
              >
                <h2 className="lg:text-2xl text-lg font-bold mb-1">
                  {movie.title}
                </h2>
                <p className="mb-3 text-sm lg:text-base text-gray-300 flex flex-wrap gap-1">
                  <span>{movie.release_date?.split("-")[0]}</span>
                  <span>•</span>
                  <span>{movie?.genre ? movie.genre : "Genre"}</span>
                  <span>•</span>
                  <span>1ч 34м</span>
                  <span>•</span>
                  <span>{movie.original_language?.toUpperCase()}</span>
                </p>

                <button
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className="flex gap-2 items-center justify-center
                             w-[120px] h-[34px] lg:w-[220px] lg:h-[48px]
                             px-4 py-2 bg-white lg:text-[20px] text-[12px] text-red-700 font-semibold
                             rounded-[12px] hover:scale-105 transition"
                >
                  <FaPlay />
                  {t("hero.watchnow")}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mt-6 flex justify-center items-center">
        <div
          className="main-prev -left-6 size-5 md:size-7 lg:size-9 bg-gray-900/80 mr-2
                        dark:bg-gray-200 dark:text-black text-white
                        rounded-full flex items-center justify-center
                        cursor-pointer hover:scale-110 transition -mt-6"
        >
          <FaArrowLeft className=" lg:text-[20px] md:text-[16px] text-[12px]" />
        </div>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={12}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="h-[110px] w-[90%] px-6"
        >
          {movies.map((movie: any) => (
            <SwiperSlide
              key={movie.id}
              style={{ width: "110px", height: "80px" }}
              className="opacity-40 hover:opacity-100 cursor-pointer transition"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`thumb-${movie.id}`}
                className="w-full h-full object-cover rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="main-next -right-6 size-5 md:size-7 lg:size-9 bg-gray-900/80 ml-2
                        dark:bg-gray-200 dark:text-black text-white
                        rounded-full flex items-center justify-center
                        cursor-pointer hover:scale-110 transition -mt-6"
        >
          <FaArrowRight className="lg:text-[20px] md:text-[16px] text-[12px]" />
        </div>
      </div>
    </section>
  );
});
