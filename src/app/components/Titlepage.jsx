import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { dateConvert } from "../utils/date";
import Link from "next/link";

const Titlepage = ({ category, title, author, date, link }) => {

  return (
    <aside className="w-full shadow-lg md:max-w-md bg-main px-4 py-4 space-y-4 absolute -bottom-10 md:-bottom-20  left-0 md:left-10 rounded-lg dark:bg-ter">
      <Link href={`/blog/${link}`}>
        <span className="bg-skin px-2 py-1  rounded-md capitalize">
          {category}
        </span>
        <h3 className="prose prose-xl py-2 line-clamp-2 text-gray-900 font-semibold dark:text-white capitalize">
          {title}
        </h3>
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 overflow-hidden rounded-full relative">
            <Image
              src={urlForImage(author.image)}
              alt="author image"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="text-sm text-[#97989F]">{author.name}</span>
          <span className="text-sm text-[#97989F]">{dateConvert(date)}</span>
        </div>
      </Link>
    </aside>
  );
};

export default Titlepage;
