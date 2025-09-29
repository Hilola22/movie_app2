import { Select } from "antd";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const MovieDateFilter = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const [fromYear, setFromYear] = useState<number | undefined>(
    searchParams.get("start_year")
      ? Number(searchParams.get("start_year"))
      : undefined
  );
  const [toYear, setToYear] = useState<number | undefined>(
    searchParams.get("end_year")
      ? Number(searchParams.get("end_year"))
      : undefined
  );

  const years = Array.from(
    { length: 2025 - 1900 + 1 },
    (_, i) => 1900 + i
  ).reverse();

  const onFromChange = (value: number | null) => {
    if (value === null) {
      setFromYear(undefined);
      searchParams.delete("start_year");
      setSearchParams(searchParams);
      return;
    }
    setFromYear(value);
    searchParams.set("start_year", String(value));
    setSearchParams(searchParams);

    if (toYear && toYear < value) {
      setToYear(undefined);
      searchParams.delete("end_year");
      setSearchParams(searchParams);
    }
  };

  const onToChange = (value: number | null) => {
    if (value === null) {
      setToYear(undefined);
      searchParams.delete("end_year");
      setSearchParams(searchParams);
      return;
    }
    setToYear(value);
    searchParams.set("end_year", String(value));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-3">
      <Select
        placeholder={t("movies.filters.from")}
        value={fromYear}
        onChange={onFromChange}
        style={{ width: 110 }}
        allowClear
        options={years.map((y) => ({ value: y, label: y }))}
      />
      <Select
        placeholder={t("movies.filters.to")}
        value={toYear}
        onChange={onToChange}
        style={{ width: 110 }}
        allowClear
        options={years.map((y) => ({
          value: y,
          label: y,
          disabled: fromYear !== undefined && y < fromYear,
        }))}
      />
    </div>
  );
});
