import React from "react";
import LatestPost from "../components/LatestPost";
import Morepopular from "../components/Morepopular";
import Blogfilter from "../components/Blogfilter";


const BlogPage = () => {


  return (
     <>
        <article className="w-full">
          <LatestPost />
        </article>
        <article className="w-full">
          <Morepopular />
        </article>
      </>
  );
};

export default BlogPage;
