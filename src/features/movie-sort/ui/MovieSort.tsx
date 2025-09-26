import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

const genreOptions = [
  { value: 28, label: "Action" },
  { value: 12, label: "Adventure" },
  { value: 16, label: "Animation" },
  { value: 35, label: "Comedy" },
  { value: 80, label: "Crime" },
  { value: 99, label: "Documentary" },
  { value: 10751, label: "Family" },
  { value: 14, label: "Fantasy" },
  { value: 878, label: "Science Fiction" },
  { value: 10770, label: "TV Movie" },
  { value: 53, label: "Thriller" },
  { value: 10752, label: "War" },
  { value: 37, label: "Western" },
];

const excludedGenres = [18, 36, 27, 10402, 10749];
const filteredGenres = genreOptions.filter(
  (genre) => !excludedGenres.includes(genre.value)
);

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: number) => {
    searchParams.set("with_genres", value.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="w-[200px]">
      <Select
        className="w-60"
        placeholder="Select Genre"
        allowClear
        options={filteredGenres}
        onChange={onChange}
      />
    </div>
  );
});