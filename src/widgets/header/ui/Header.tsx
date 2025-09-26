import { memo, useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";
import { FiMenu, FiX } from "react-icons/fi";
import { Login } from "../../../features/login";

export const Header = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <header className="dark:bg-[#111111] bg-white text-black dark:text-white w-full z-50 shadow-md">
      <nav className="container flex justify-between items-center h-20 px-4">
        <Logo />

        <div className="hidden md:flex gap-6">
          <Navigation />
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Option />
        </div>

        <div className="flex md:hidden gap-4 items-center">
          <Option />
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="text-3xl"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed top-0 right-0 h-screen w-34 dark:bg-black/95 bg-gray-200 text-white
          transform ${open ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-500 ease-in-out
          md:hidden
          flex flex-col items-center pt-24 gap-8
          z-40
        `}
      >
        {open && (
          <FiX
            size={30}
            className="dark:text-white text-gray-600 absolute  top-5 right-2"
            onClick={() => setOpen(!open)}
          />
        )}

        <Navigation />
        <Login className="flex text-[12px]" />
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </header>
  );
});
