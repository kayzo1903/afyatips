import React from "react";
import heropage from "../../../public/heropage.jpg";
import Image from "next/image";

const PostCat = ({ category, title, athor, date }) => {
  return (
    <article className="w-full sm:max-w-sm h-96 py-2 px-2 shadow-xl">
      <div className="w-full h-[370px] flex flex-col justify-between">
        <div className="w-full h-52 relative rounded-lg overflow-hidden">
          <Image
            src={heropage} //post image here
            alt="hero image"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="bg-c1 dark:bg-ter text-skin w-fit p-1 rounded-md font-semibold capitalize">
          Diet
        </span>        
        <h3 className="text-xl text-gray-900 font-bold dark:text-white capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="flex gap-2 items-center ">
          <div className="w-10 h-10 overflow-hidden rounded-full relative">
            <Image
              src={heropage}
              alt="hero image"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="text-sm text-[#97989F]">John Doe</span>
          <span className="text-sm text-[#97989F]">january , 08 , 2024</span>
        </div>
      </div>
    </article>
  );
};

export default PostCat;
