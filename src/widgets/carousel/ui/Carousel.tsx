import { memo } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel = memo(({ images }: CarouselProps) => {
  return (
    <div className="max-w-6xl mx-auto mt-4 flex overflow-x-auto space-x-4 px-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className="w-[120px] h-[70px] object-cover rounded-lg cursor-pointer"
        />
      ))}
    </div>
  );
});
