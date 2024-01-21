import React from "react";
import Image from "next/image";
import { getPost } from "@/app/utils/sanityData";
import { urlForImage } from "../../../../sanity/lib/image";
import { dateConvert } from "@/app/utils/date";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const Postpage = async ({ params }) => {
  const slugUrl = params.id;
  const data = await getPost(slugUrl);

  const { categories, mainImage, author, title, publishedAt, body } = data;

  if (!data) {
    <main className="w-full h-screen flex justify-between items-center dark:bg-gray-950">
      <div className="w-56">
        <h3 className="p-4 dark:text-main">Opps something went wrong</h3>
        <Link href='/'> try again </Link>
      </div>
    </main>;
  }

  return (
    <article className="pt-8 space-y-4 pb-4">
      <span className="w-fit py-2 px-4 bg-skin rounded-lg text-white">
        {categories[0].title}
      </span>
      <h3 className="pose prose-2xl font-bold text-justify dark:text-main">{title}</h3>
      <div className="w-full flex gap-2 items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full relative">
          <Image
            src={urlForImage(author.image)}
            alt={author.name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="text-sm text-gray-400">{author.name}</span>
        <span className="text-sm text-gray-400">
          {dateConvert(publishedAt)}
        </span>
      </div>
      <div className="w-full h-72 sm:h-80 md:h-96 relative">
        <Image
          src={urlForImage(mainImage.image)}
          alt={mainImage.alt}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="space-y-2 w-full prose text-justify dark:text-gray-300">
        {/* //here we have to set configuration to allow inline image */}
        <PortableText value={body} />
      </div>
    </article>
  );
};

export default Postpage;
