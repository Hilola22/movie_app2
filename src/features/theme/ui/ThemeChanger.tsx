import { memo, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ThemeChanger = memo(() => {
  const [dark, setDark] = useState(true);
  const [animating, setAnimating] = useState(false);

  const toggleTheme = () => {
    setAnimating(true);

    setTimeout(() => {
      setDark((prev) => !prev);
    }, 200);

    setTimeout(() => setAnimating(false), 200);

    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <div className="relative flex items-center justify-center transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center
                   w-[40px] h-[40px] p-3 rounded-full
                   bg-gray-600 text-white dark:bg-gray-200 dark:text-black
                   shadow-lg overflow-hidden"
      >
        <span
          className={`absolute transition-opacity duration-500 ease-in-out
            ${
              animating
                ? "translate-y-full opacity-0" 
                : "translate-y-0 opacity-100"
            }`}
        >
          {dark ? (
            <MdOutlineLightMode size={26} />
          ) : (
            <MdOutlineDarkMode size={26} />
          )}
        </span>

        <span
          className={`absolute transition-transform duration-500 ease-in-out
            ${
              animating
                ? "translate-y-0 opacity-100" 
                : "-translate-y-full opacity-0" 
            }`}
        >
          {dark ? (
            <MdOutlineDarkMode size={26} />
          ) : (
            <MdOutlineLightMode size={26} />
          )}
        </span>
      </button>
    </div>
  );
});
