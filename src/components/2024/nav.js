import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";

import { homeBackground } from "./cloudImages";

const routes = [
  {
    route: "/#about",
    title: "About"
  },
  {
    route: "/#speakers",
    title: "Speakers"
  },
  {
    route: "/schedule",
    title: "Schedule"
  },
  {
    route: "/sustain-africa",
    title: "Sustain Africa"
  },
  {
    route: "/travel",
    title: "Travel"
  },
  {
    route: "/gallery",
    title: "Gallery"
  },
  {
    route: "/faq",
    title: "FAQ"
  }
];

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);
  /* eslint-disable no-unused-vars */
  const [_navbar, setNavbar] = useState(false);

  const desktopListener = useCallback(
    (x) => {
      if (!x.matches) return;

      toggleExpansion(false);
    },
    [toggleExpansion]
  );

  useEffect(() => {
    const desktopScreen = window.matchMedia("(min-width: 1024px)");
    desktopScreen.addListener(desktopListener);
    desktopListener(desktopScreen);

    return () => {
      desktopScreen.removeListener(desktopListener);
    };
  }, [desktopListener]);

  return (
    <div className="relative">
      <div
        className="relative border-solid border-2 border-[#1E1E1E] lg:fixed container inset-x-0 mx-auto fixed top-0 z-40 bg-white mt-10 pl-4 lg:px-16 w-[90%]" /* lg:w-[74%] */
      >
        <div className="bg-white flex flex-wrap items-center justify-between max-w-8xl mx-auto p-2 lg:py-5 ">
          <Link className="z-20 flex items-center no-underline text-white" to="/">
            <img
              alt="Open Source Community Africa's Logo"
              className="block mx-auto w-12 xl:w-20"
              src={homeBackground.logo}
            />
          </Link>

          <button
            className="block lg:hidden items-center px-3 py-2 rounded text-black"
            onClick={() => {
              window.scrollTo(0, 0);
              toggleExpansion(!isExpanded);
            }}
            aria-label="mobile-nav-button"
          >
            {isExpanded ? (
              <span className="fill-current h-4 w-8">
                <svg width="15" height="30" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Close Menu</title>
                  <path
                    d="M11.0494 1.17733L1.65261 10.5744M1.65234 1.17733L11.0494 10.5744"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span className="fill-current h-4 w-8">
                <svg width="44" height="30" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16.0547" width="27.9971" height="2" fill="#0B0B20" />
                  <rect x="16" y="26.0547" width="27.9971" height="2" fill="#0B0B20" />
                  <rect x="16" y="36.0547" width="27.9971" height="2" fill="#0B0B20" />
                </svg>
              </span>
            )}
          </button>

          <nav
            id="desktop-nav"
            className="hidden lg:block flex flex-col py-24 bg-black text-white lg:text-black lg:bg-white min-h-screen min-w-full text-center lg:py-0 lg:block lg:flex-row lg:items-center lg:w-auto lg:min-h-0 lg:min-w-0"
          >
            {routes.map((link) => (
              <a
                className="hover:text-[#F7931E] transition-all ease-in-out delay-75 font-humane tracking-wider lg:font-clashDisplay block mt-0 mb-5 text-left no-underline text-6xl lg:inline-block lg:-my-2 lg:ml-8 lg:text-sm uppercase font-bold"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${
          isExpanded ? "visible" : "invisible"
        }  transition-all ease-in-out delay-75 z-40 flex flex-col pt-10 px-10 bg-black text-white min-h-screen min-w-full text-center absolute`}
      >
        {routes.map((link) => (
          <a
            className="font-humane tracking-wider lg:font-clashDisplay block mt-0 mb-5 text-left no-underline text-6xl lg:inline-block lg:-my-2 lg:ml-8 lg:text-sm uppercase"
            key={link.title}
            href={link.route}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
