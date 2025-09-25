import { memo } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdLocalMovies } from "react-icons/md";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export const Navigation = memo(() => {
  const baseLi =
    "flex flex-col items-center px-7 transition-colors duration-300"; // smooth color

  return (
    <ul className="flex items-center">
      <NavLink to="/" end>
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]" // 🌑 dark active
                : "text-gray-500 dark:text-gray-300" // 🌑 dark normal
            }`}
          >
            <GoHomeFill size={24} />
            <span>Home</span>
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
            <span>Movies</span>
          </li>
        )}
      </NavLink>

      <NavLink to="/tickets">
        {({ isActive }) => (
          <li
            className={`${baseLi} ${
              isActive
                ? "text-[#C61F1F] dark:text-[#ff4d4d]"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <BsFillTicketPerforatedFill size={24} />
            <span>Tickets</span>
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
            <span>Search</span>
          </li>
        )}
      </NavLink>
    </ul>
  );
});
