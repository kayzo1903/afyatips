"use client";

import React, { useEffect, useState } from "react";
import { category } from "../utils/data";
import SelectedArticle from "./SelectedArticle";

const Blogfilter = () => {
  const [catgr, setCatgr] = useState([]);

  useEffect(() => {
  }, [catgr]);

  const handleSelection = (text) => {
    if (text === "All") {
      if (!catgr.includes("All")) {
        setCatgr(["All"]);
      } else {
        setCatgr([]);
      }
    } else {
      if (catgr.includes("All")) {
        const update = catgr.filter((item) => item !== "All");
        setCatgr([...update, text]);
      } else {
        if (catgr.includes(text)) {
          const update = catgr.filter((item) => item !== text);
          setCatgr(update);
        } else {
          setCatgr([...catgr, text]);
        }
      }
    }
  };

  return (
    <aside>
      <header className="w-full pt-4 flex gap-2 flex-wrap">
        <button
          onClick={() => handleSelection("All")}
          className={`${
            catgr.includes("All")
              ? "bg-skin"
              : "bg-main hover:bg-skin hover:text-main"
          } py-2 px-4 rounded-md text-sm border-gray-300 border-2`}
        >
          All
        </button>
        {category.map((item) => {
          const { id, name } = item;
          return (
            <button
              onClick={() => handleSelection(name)}
              className={`${
                catgr.includes(name)
                  ? "bg-skin"
                  : "bg-main hover:bg-skin hover:text-main"
              } py-2 px-4 rounded-md text-sm border-gray-300 border-2`}
              key={id}
            >
              {name}
            </button>
          );
        })}
      </header>
      <SelectedArticle cat={catgr} />
    </aside>
  );
};

export default Blogfilter;
