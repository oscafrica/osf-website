import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";

import { homeBackground } from "./cloudImages";

function Nav() {
  const navbgWrapperStyles = {
    backgroundImage: `url(${homeBackground.darkNavBackground})`,
    backgroundSize: "cover"
  };
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
    <div className="relative w-screen">
      <div
        className="relative top-0 z-40 bg-white opacity-70 w-screen flex flex-wrap items-center justify-between"
        style={navbgWrapperStyles}
        /* lg:w-[74%] */
      >
        <div className="container flex flex-row mx-auto justify-between p-5 w-screen">
          <Link className="z-20 flex items-center no-underline text-white" to="/">
            <img
              alt="Open Source Community Africa's Logo"
              className="block mx-auto w-12 xl:w-20"
              src={homeBackground.logo}
            />
          </Link>
          <button
            className="block lg:hidden items-center px-3 py-2 rounded"
            onClick={() => {
              window.scrollTo(0, 0);
              toggleExpansion(!isExpanded);
            }}
            aria-label="mobile-nav-button"
          >
            {isExpanded ? (
              <span className="fill-current h-4 w-8">
                <svg
                  width="15"
                  height="30"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="bg-white p-6"
                >
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
              <span className="fill-current h-9 w-9 flex flex-col items-center justify-center">
                <svg
                  width="44"
                  height="30"
                  viewBox="0 0 44 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="bg-white flex"
                >
                  <rect x="16" y="16.0547" width="27.9971" height="2" fill="#0B0B20" />
                  <rect x="16" y="26.0547" width="27.9971" height="2" fill="#0B0B20" />
                  <rect x="16" y="36.0547" width="27.9971" height="2" fill="#0B0B20" />
                </svg>
              </span>
            )}
          </button>
          <nav
            id="desktop-nav"
            className="relative hidden lg:block flex flex-col py-24 text-white lg:text-black min-w-full text-center lg:py-0 lg:block lg:flex-row lg:items-center lg:w-auto lg:min-h-0 lg:min-w-0"
          >
            <div className="flex flex-row items-center">
              <div className="mx-2 flex justify-center sm:flex-row min-w-52 flex-col sm:mb-16 md:mb-10 lg:mb-0 bg-white border-yellow-500 items-center border-4">
                <a
                  href="#"
                  className="font-clashDisplay font-bold bg-white p-4 text-lg tracking-wider  mx-5 w-fit flex items-center"
                >
                  Register &nbsp;
                </a>
              </div>
              <div className="mx-2 flex sm:flex-row flex-col sm:mb-16 md:mb-10 lg:mb-0 bg-white">
                <a
                  href="/2023"
                  className="font-clashDisplay font-bold  p-5 text-lg tracking-wider  mx-5 w-fit flex items-center"
                >
                  Past Events &nbsp;
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`${
          isExpanded ? "visible" : "invisible"
        }  transition-all ease-in-out delay-75 z-40 flex flex-col pt-10 px-10 min-w-full text-center absolute h-screen bg-black`}
      >
        <div className="mx-2 flex justify-center sm:flex-row min-w-52 flex-col sm:mb-16 md:mb-10 lg:mb-0 bg-white border-yellow-500 border-4">
          <a
            href="#"
            className="font-clashDisplay font-bold  p-5 text-black tracking-wider w-full mx-5 w-fit flex items-center justify-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Register &nbsp;
          </a>
        </div>
        <div className="mx-2 flex sm:flex-row flex-col sm:mb-16 md:mb-10 lg:mb-0 bg-white">
          <a
            href="/past-events"
            className="font-clashDisplay font-bold  p-5 text-black tracking-wider w-full mx-5 w-fit flex items-center justify-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Past Events &nbsp;
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
