import React from "react";
// import Search from "./Search"; //no need for search bar yet
import Link from "next/link";
import { navbarLink } from "../utils/data";

const SideNavbar = ({ status }) => {
  return (
    <div
      className={`md:hidden shadow-2xl rounded-t-3xl absolute transition-all duration-500  ${
        status ? "top-32 opacity-100 z-50" : "top-[100vh] opacity-0 -z-50"
      }  left-0 w-full bg-[#ffff] dark:bg-gray-950 h-screen`}
    >
      <div className="w-full flex flex-col items-center gap-8 justify-center py-4">
        {/* <Search /> */} 
        <nav className="text-sm font-light">
          <ul className="flex flex-col gap-6 items-center text-gray-900 dark:text-white">
            {navbarLink.map((item) => {
              const { id, link, name } = item;
              return (
                <li key={id}>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavbar;
