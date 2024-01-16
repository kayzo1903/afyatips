"use client";
import React from "react";
import Link from "next/link";

const SubmitMessage = ({ pass }) => {
  return (
    <div className="w-full sm:w-[340px] h-80:">
      <div className="space-y-4 py-3 px-4 shadow-xl">
        <p className="w-full prose-xl prose">{pass}</p>
        <button className="w-full bg-skin rounded-sm">
          <Link href={"/"} className="text-main py-4 no-underline">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default SubmitMessage;
