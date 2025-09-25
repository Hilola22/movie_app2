import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto w-[200px]">
      <Select
        className="w-60"
        placeholder="Sort by"
        options={[
          { value: "popularity.desc", label: "Popuplar" },
          { value: "vote_average.asc", label: "Vote -" },
          { value: "vote_average.desc", label: "Vote +" },
        ]}
        onChange={onChange}
      />
    </div>
  );
});
