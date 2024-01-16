"use client";
import React, { useState } from "react";
import { Moon, Sun } from "./Icons";
// import { useTheme } from "next-themes";



const DarkLightMode = () => {

  const [ theme , setTheme ] = useState("dark")

  const themeSetup = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
 
  return (
    <button
      onClick={themeSetup}
      className="w-14 h-7 bg-c1 dark:bg-skin rounded-2xl flex relative px-1"
    >
      <div
        className={`transition-all duration-500 w-6 h-6 rounded-full absolute bg-white dark:bg-gray-900 ${
          theme === 'light' ? 'left-4' : "left-10"
        } top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {theme === 'light' ? (
          <div className="scale-50">
            <Sun /> 
          </div>
        ) : (
          <div className="scale-50">
            <Moon />
          </div>
        )}
      </div>
    </button>
  );
};

export default DarkLightMode;
