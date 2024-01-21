"use client";
import Link from "next/link";
import React, { useState } from "react";
// import Search from "./Search"; no needs for search bar yet
import { QueueList } from "./Icons";
import SideNavbar from "./SideNavbar";
import { navbarLink } from "../utils/data";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isNavOpen, setOpenNav] = useState(false);

  const navBarSetup = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className="w-full h-16 relative dark:bg-gray-950 dark:text-main">
      <div className="flex pt-2 justify-between gap-2  items-center max-w-screen-lg mx-auto px-2">
        <span className="text-2xl font-bold">
          <Link href={"/"}>afyatips</Link>
        </span>
        <nav className="text-sm font-light hidden md:block">
          <ul className="flex gap-6 items-center">
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
        {/* <div className="hidden md:block">
          <Search />
        </div> */}
        <ThemeSwitch />
        <div className="block md:hidden">
          <button onClick={navBarSetup}>
            <QueueList />
          </button>
        </div>
      </div>
      <SideNavbar status={isNavOpen} />
    </header>
  );
};

export default Navbar;
