import Link from "next/link";
import React from "react";
import NewsLetter from "./NewsLetter";
import { category, navbarLink } from "../utils/data";

const Footer = () => {
  return (
    <section className="w-full bg-c1 dark:bg-sec h-fit pt-8 pb-2 justify-between">
      <div className="max-w-screen-lg mx-auto px-2">
        <aside className="w-full flex gap-4 flex-wrap lg:flex-nowrap justify-center sm:justify-between">
          <article className="w-36 px-2 prose">
            <h6 className="text-xl font-bold w-fit">Quick Link</h6>
            <ul >
              {navbarLink.map((item) => {
                const { id, link, name } = item;
                return (
                  <li
                    key={id}
                    className="text-sm "
                  >
                    <Link className="no-underline dark:text-main text-gray-900" href={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="w-36 px-2 prose">
            <h6 className="text-xl font-bold">Catergory</h6>
            <ul>
              {category.map((item) => {
                const { id, link, name } = item;
                return (
                  <li
                    key={id}
                    className="text-sm dark:text-main text-gray-900 "
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </article>
          <NewsLetter />
        </aside>
      </div>
      <h3 className="h-[1px] !w-full bg-gray-400 my-4 "></h3>
      <div className="max-w-screen-lg mx-auto px-2 pt-4 flex justify-between items-center">
        <div className="grid dark:text-main">
          <span className="text-xl">afyatips</span>
          <span className="text-xs ">
            ©{new Date().getFullYear()} all right reserved
          </span>
        </div>
        <div>
          <ul className="flex gap-2 text-sm dark:text-main">
            <li>
              <Link href={"/"}>Term of use</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Cookies Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
