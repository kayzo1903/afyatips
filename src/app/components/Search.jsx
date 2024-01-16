import React from "react";
import { SearchTab } from "./Icons";

const SearchPage = () => {
  return (
      <form className="w-48 relative">
        <input
          type="search"
          name="searcharticle"
          id="search"
          placeholder="search" 
          className='w-full dark:text-gray-900'
        />
        <button type="submit" className="absolute top-0 right-1 scale-75">
          <SearchTab />
        </button>
      </form>
  );
};

export default SearchPage;
