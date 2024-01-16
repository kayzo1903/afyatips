'use client'
import React , {useState} from "react";
import PostCat from "./PostCat";

const SelectedArticle = ({ cat }) => {
    const [loading , setLoading] = useState(false)
  
  return (
    <article className={`${ cat.length > 0 ? "block" : "hidden"} transition-all duration-500 space-y-4 my-8`}>
      <PostCat />
      <button className="text-skin">load more</button>
    </article>
  );
};

export default SelectedArticle;
