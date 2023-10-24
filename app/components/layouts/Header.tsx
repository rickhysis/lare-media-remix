import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import LogoText from "~/assets/svg/LogoText";
import { pages } from "~/constant/pages";
import type PagesType from "~/types/pages";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('about');
  const [scrollActive, setScrollActive] = useState(false);
  const { t } = useTranslation("menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full bg-white z-30 transition-all " +
          (scrollActive ? " shadow-md pt-0" : "pt-1 sm:pt-2")
        }
      >
        <nav className="px-2 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2">
          <div className="col-start-1 col-end-2 flex items-center w-60 h-12">
            <LogoText />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 justify-end items-center">
            {pages.map((page: PagesType, index: number) => (
              <LinkScroll
                activeClass="active"
                key={index}
                to={page.name}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(page.name);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative capitalize" +
                  (activeLink === page.name
                    ? " text-lare-media animation-active "
                    : " text-black-500 hover:text-lare-media a")
                }
              >
                {t(page.name)}
              </LinkScroll>
            ))}
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-white">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {pages.map((page: PagesType, index: number) => (
              <LinkScroll
                key={index}
                activeClass="active"
                to={page.name}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(page.name);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all capitalize " +
                  (activeLink === page.name
                    ? "  border-lare-media text-lare-media"
                    : " border-transparent")
                }
              >
                {page.icon()}
                {t(page.name)}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;