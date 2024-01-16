import React from "react";
import Image from "next/image";
import Titlepage from "./Titlepage";
import { urlForImage } from "../../../sanity/lib/image";
import { getData } from "../utils/sanityData";

export default async function HeroPage() {
  const data = await getData()

  if (!data) {
    <section className="w-full min-h-[60vh] py-1 relative">
      <div className="transition-all duration-500 relative h-[50vh] md:h-[50vh]  w-full">
        opps something whent wrong
      </div>
    </section>;
  } else {
    const { title, slug, mainImage, author, categories, publishedAt } = data;

    return (
      <section className="w-full min-h-[60vh] py-1 relative">
        <div className="transition-all duration-500 relative h-[50vh] md:h-[50vh]  w-full">
          <Image
            src={urlForImage(mainImage.image)}
            alt={mainImage.alt}
            fill={true}
            style={{ objectFit: "cover" }}
          />
          <Titlepage
            category={categories[0].title}
            title={title}
            author={author}
            date={publishedAt}
            link={slug}
          />
        </div>
      </section>
    );
  }
}
