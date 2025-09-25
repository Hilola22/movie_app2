import { useState } from "react";

const languages = [
  {
    code: "En",
    name: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    code: "Py",
    name: "Russian",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    code: "Uz",
    name: "Uzbek",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
  },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const choose = (lang: (typeof languages)[0]) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative z-10 inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-gray-400  dark:bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700"
      >
        <img
          src={selected.flag}
          alt={selected.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{selected.code}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-md bg-gray-800 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => choose(lang)}
              className="flex items-center gap-3 w-full px-4 py-2 text-left text-gray-200 hover:bg-gray-700"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-6 h-5 rounded-sm object-cover"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
