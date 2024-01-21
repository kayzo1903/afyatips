"use client";
import { Sun, Moon } from "./Icons";
import { useContext } from "react";
import { ThemeContext } from "../libs/ThemeContext";

const ThemeSwitch = () => {
  const { mode, modeSwitcher } = useContext(ThemeContext);

  return (
    <button
      onClick={modeSwitcher}
      className="transition-all ease-in-out duration-500 w-fit py-1 px-2 flex gap-2 relative h-8 rounded-lg shadow-2xl bg-main dark:bg-gray-950"
    >
      {mode === "dark" ? (
        <div>
          <Moon />
        </div>
      ) : (
        <div>
          <Sun />
        </div>
      )}
    </button>
  );
};

export default ThemeSwitch;
