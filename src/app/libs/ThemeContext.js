"use client";

import { ThemeProvider } from "next-themes";
import { createContext } from "react";
import { useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvide = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const modeSwitcher = () =>{
       setMode((prev) => prev === "dark" ? "light" : "dark")
  }
  return (
    <ThemeContext.Provider value={{mode , modeSwitcher}}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

