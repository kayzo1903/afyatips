"use client";

import React, { useEffect, useState } from "react";
import { category } from "../utils/data";
import { getLatestPost} from "../utils/sanityData";
import PostCat from "./PostCat";
import { motion } from "framer-motion";

const Blogfilter = () => {
  const [catgr, setCatgr] = useState([]);
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

  const filterData = (text) => {
    const FilteredData = data.filter(
      (item) => item.categories[0].title === text
    );
    setSelectedData(FilteredData);
  };

  const handleSelection = (text) => {
    if (catgr.includes(text)) {
      setCatgr([]);
      setSelectedData([]);
    } else {
      setCatgr(text);
      filterData(text);
    }
  };

  return (
    <article>
      <header className="w-full pt-4 flex gap-2 flex-wrap">
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
      <motion.div className={`${catgr ? "block" : "hidden"} space-y-4 py-4 transition-all duration-500`}>
        <h3 className="prose">{catgr}</h3>
        <div>
          {selectedData ? (
            <div className="w-full">
                <PostCat post={selectedData} />
            </div>
          ) : (
            <div className="w-full">
                 <p>no post</p>
            </div>
          )}
        </div>
      </motion.div>
    </article>
  );
};

export default Blogfilter;
