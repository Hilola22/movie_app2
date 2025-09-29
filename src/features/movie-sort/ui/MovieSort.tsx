import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useGenres } from "../model/useGenreSort";
const excludedGenres = [18, 36, 27, 10402, 10749];

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get("language") || "en"; 

  const { data: genres, isLoading } = useGenres(language);

  const onChange = (value?: number) => {
    if (value) {
      searchParams.set("with_genres", value.toString());
    } else {
      searchParams.delete("with_genres");
    }
    setSearchParams(searchParams);
  };

  const options =
    genres
      ?.filter((g) => !excludedGenres.includes(g.id))
      .map((g) => ({ value: g.id, label: g.name })) || [];

  return (
    <div className="w-[200px]">
      <Select
        className="w-60"
        placeholder={isLoading ? "Loading..." : "Select Genre"}
        allowClear
        options={options}
        onChange={onChange}
        loading={isLoading}
      />
    </div>
  );
});
