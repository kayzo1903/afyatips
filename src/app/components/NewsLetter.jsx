import React from "react";
import { Envelope, SearchTab } from "./Icons";

const NewsLetter = () => {
  return (
    <article className="w-full sm:w-[390px] lg:w-[420px] py-6 bg-main dark:bg-ter px-8">
      <div className="w-full text-center space-y-1">
        <h6 className="text-xl font-bold">Weekly Newsletter</h6>
        <p className="text-sm text-gray-500">
          get articles via email by just subcribe here
        </p>
      </div>
      <form className="w-full relative mt-4 space-y-4">
        <div className="relative w-full">
          <input
            type="search"
            name="searcharticle"
            id="search"
            placeholder="search"
            className="w-full"
          />
          <div className="absolute top-1 right-1 scale-75">
            <Envelope />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-skin text-sm text-main py-2 rounded-lg"
        >
          subscribe
        </button>
      </form>
    </article>
  );
};

export default NewsLetter;
