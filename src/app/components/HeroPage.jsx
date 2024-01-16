import React from "react";
import heropage from "../../../public/heropage.jpg";
import Image from "next/image";
import Titlepage from "./Titlepage";

const HeroPage = () => {
  return (
    <section className="w-full min-h-[60vh] py-1 relative">
      <div className="transition-all duration-500 relative h-[50vh] md:h-[50vh]  w-full">
        <Image
          src={heropage}
          alt="hero image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <Titlepage
          category={"Diet"}
          title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
          athor={"john doe"}
          date={"january , 07 , 2023"}
        />
      </div>
    </section>
  );
};

export default HeroPage;
