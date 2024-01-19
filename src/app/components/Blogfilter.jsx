"use client";

import React, { useEffect, useState } from "react";
import { category } from "../utils/data";
import { getLatestPost } from "../utils/sanityData";
import { motion } from "framer-motion";
import BlogArticles from "./Article";

const Blogfilter = () => {
  const [catgr, setCatgr] = useState(["All"]);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getLatestPost();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [catgr]);

  useEffect(()=>{
    const filteredArray = data.filter(item => catgr.includes(item.categories[0].title));
    setSelectedData(filteredArray)
  },[catgr])

  const handleSelection = (text) => {
    if (text === "All") {
      if (catgr.includes("All")) {
        setCatgr([]);
      } else {
        setCatgr(["All"]);
      }
    } 
    else {
      const updatedCategories = [...catgr];

      if (updatedCategories.includes("All")) {
        updatedCategories.splice(updatedCategories.indexOf("All"), 1);
      }

      if (updatedCategories.includes(text)) {
        updatedCategories.splice(updatedCategories.indexOf(text), 1);
      } else {
        updatedCategories.push(text);
      }

      setCatgr(updatedCategories.length === 0 ? ["All"] : updatedCategories);
    }
  }

  return (
    <article>
      <header className="w-full pt-4 flex gap-2 flex-wrap">
        <button
          onClick={() => handleSelection("All")}
          className={`${
            catgr.includes("All")
              ? "bg-skin"
              : "bg-main hover:bg-skin hover:text-main"
          } py-2 px-4 rounded-md text-sm border-gray-300 border-2 dark:text-ter`}
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
              } py-2 px-4 rounded-md text-sm border-gray-300 border-2 dark:text-ter`}
              key={id}
            >
              {name}
            </button>
          );
        })}
      </header>
      <motion.div className="space-y-4 py-4 transition-all duration-500">
        <div>
          {selectedData.length > 0 ? (
            <div className="w-full">
              <BlogArticles post={selectedData} />
            </div>
          ) : (
            <div className="w-full">
              <BlogArticles post={data} />
            </div>
          )}
        </div>
      </motion.div>
    </article>
  );
};
export default Blogfilter;
