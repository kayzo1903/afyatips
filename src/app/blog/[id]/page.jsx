import React from "react";
import Image from "next/image";
import heropage from "../../../../public/heropage.jpg";

const Postpage = ({
  category,
  title,
  athuorpc,
  athuorname,
  date,
  articlepic,
  content,
}) => {
  return (
    <article className="pt-8 space-y-4 pb-4">
      {/* <span>{category}</span> */}
      <span className="w-fit py-2 px-4 bg-skin rounded-lg text-white">Diet</span>
      {/* <h3>{title}</h3> */}
      <h3 className="text-xl font-bold text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci
        sunt corrupti illum cum a maxime impedit{" "}
      </h3>
      <div className="w-full flex gap-2 items-center">
        {/* <div>{athuorpc}</div> */}
        <div className="w-10 h-10 overflow-hidden rounded-full relative">
          <Image
            src={heropage}
            alt="hero image"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* <span>{athuorname}</span> */}
        <span className="text-sm text-gray-400">John Doe</span>
        {/* <span>{date}</span> */}
        <span className="text-sm text-gray-400">January 09</span>
      </div>
      <div className="w-full sm:h-80 md:h-96 relative">
        <Image
          src={heropage}
          alt="hero image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <div>{content}</div> */}
      <div className="space-y-2 w-full">
        <div className="space-y-1">
          <h6 className="text-xl font-semibold">heading</h6>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fuga
            veniam incidunt velit possimus aliquam nulla temporibus soluta, odit
            voluptate alias illum. Pariatur nihil sit ducimus omnis ex quos
            modi.
          </p>
        </div>
        <div className="space-y-1">
          <h6 className="text-xl font-semibold">heading</h6>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fuga
            veniam incidunt velit possimus aliquam nulla temporibus soluta, odit
            voluptate alias illum. Pariatur nihil sit ducimus omnis ex quos
            modi.
          </p>
        </div>
        <div className="space-y-1">
          <h6 className="text-xl font-semibold">heading</h6>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fuga
            veniam incidunt velit possimus aliquam nulla temporibus soluta, odit
            voluptate alias illum. Pariatur nihil sit ducimus omnis ex quos
            modi.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Postpage;
