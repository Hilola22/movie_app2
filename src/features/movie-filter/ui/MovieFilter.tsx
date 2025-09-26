import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieFilter = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  const options = [
    { value: "original_title.desc", label: "Original Title ↓ (Z-A)" },
    { value: "original_title.asc", label: "Original Title ↑ (A-Z)" },
    { value: "popularity.desc", label: "Popularity ↓ (High → Low)" },
    { value: "popularity.asc", label: "Popularity ↑ (Low → High)" },
    { value: "revenue.desc", label: "Revenue ↓ (High → Low)" },
    { value: "revenue.asc", label: "Revenue ↑ (Low → High)" },
    { value: "primary_release_date.desc", label: "Release Date ↓ (Newest)" },
    { value: "primary_release_date.asc", label: "Release Date ↑ (Oldest)" },
    { value: "title.desc", label: "Title ↓ (Z-A)" },
    { value: "title.asc", label: "Title ↑ (A-Z)" },
    { value: "vote_average.desc", label: "Rating ↓ (High → Low)" },
    { value: "vote_average.asc", label: "Rating ↑ (Low → High)" },
    { value: "vote_count.desc", label: "Vote Count ↓ (High → Low)" },
    { value: "vote_count.asc", label: "Vote Count ↑ (Low → High)" },
  ];

  return (
    <div className="w-[200px]">
      <Select
        className="w-60"
        placeholder="Sort By"
        options={options}
        allowClear
        value={searchParams.get("sort_by") || undefined}
        onChange={onChange}
      />
    </div>
  );
});
