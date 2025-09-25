import { useMovie } from "@/entities/movie";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import type { Swiper as SwiperType } from "swiper";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  const movies = data?.results?.slice(0, 5) || []; 

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <section className="container w-full relative mb-10">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: ".main-next",
            prevEl: ".main-prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="max-h-[640px] md:h-[700px] w-full relative rounded-[12px]"
        >
          {movies.map((movie: any) => (
            <SwiperSlide key={movie.id} className="relative">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`slide-${movie.id}`}
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-4 inset-x-0 flex flex-col items-center space-y-2 text-white">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <button className="px-4 py-2 bg-white text-red-700 rounded">
                  Watch Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative mt-4 w-full flex items-center">
          <div className="thumb-prev absolute left-50 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10 cursor-pointer shadow">
            &#8592;
          </div>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-[110px] w-[600px] px-12"
          >
            {movies.map((movie: any) => (
              <SwiperSlide
                key={movie.id}
                style={{ width: "110px" }}
                className="opacity-40 hover:opacity-100 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`thumb-${movie.id}`}
                  className="w-full h-full object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="thumb-next absolute right-50 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10 cursor-pointer shadow">
            &#8594;
          </div>
        </div>
      </section>
    </>
  );
});
