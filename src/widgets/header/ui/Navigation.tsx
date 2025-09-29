import { memo } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdLocalMovies } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const baseLi =
    "flex flex-col items-center px-7 transition-colors duration-300";

  return (
    <ul className="flex lg:items-center lg:flex-row md:flex-row flex-col gap-4 text-right">
      <NavLink to="/" end>
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <GoHomeFill size={24} />
            <span>{t("header.navigation.home")}</span>
          </li>
        )}
      </NavLink>

      <NavLink to="/movie">
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <MdLocalMovies size={24} />
            <span>{t("header.navigation.movies")}</span>
          </li>
        )}
      </NavLink>

      <NavLink to="/bookmark">
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]"
                : "text-gray-500 dark:text-gray-300"
            } mt-1`}
          >
            <FaBookmark size={19} className="mb-1" />
            <span>{t("header.navigation.bookmark")}</span>
          </li>
        )}
      </NavLink>

      <NavLink to="/search">
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <FiSearch size={24} />
            <span>{t("header.navigation.search")}</span>
          </li>
        )}
      </NavLink>
    </ul>
  );
});
