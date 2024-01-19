'use client'
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { dateConvert } from "../utils/date";
import Link from "next/link";

const BlogArticles = ({ post }) => {
  const [displayedPosts, setDisplayedPosts] = useState(6);

  const loadMorePosts = () => {
    // Increase the number of displayed posts by 4
    setDisplayedPosts(displayedPosts + 3);
  };

  return (
    <div className="w-full  space-y-4">
      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {post.slice(0, displayedPosts).map((item) => {
          const {
            title,
            slug,
            mainImage,
            author,
            categories,
            publishedAt,
            _id,
          } = item;

          return (
            <Link
              href={`/blog/${slug}`}
              className="w-full sm:w-[360px] h-[420px] py-2 px-2 shadow-xl md:scale-90"
              key={_id}
            >
              <div className="w-full h-[390px] flex flex-col justify-between ">
                <div className="w-full h-52 relative rounded-lg overflow-hidden">
                  <Image
                    src={urlForImage(mainImage.image)}
                    alt={mainImage.alt}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="bg-c1 dark:bg-ter text-skin w-fit p-1 rounded-md font-semibold capitalize">
                  {categories[0].title}
                </span>
                <h3 className="text-xl text-gray-900 font-bold line-clamp-2 dark:text-white capitalize">
                  {title}
                </h3>
                <div className="flex gap-2 items-center ">
                  <div className="w-10 h-10 overflow-hidden rounded-full relative">
                    <Image
                      src={urlForImage(author.image)}
                      alt={author.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span className="text-sm text-[#97989F]">{author.name}</span>
                  <span className="text-sm text-[#97989F]">
                    {dateConvert(publishedAt)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {displayedPosts < post.length && (
        <div>
          <button className="text-skin" onClick={loadMorePosts}>
            view more
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogArticles;
