import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";

import { homeBackground } from "./cloudImages";

function Nav() {
  const navbgWrapperStyles = {
    backgroundImage: `url(${homeBackground.darkNavBackground})`,
    backgroundSize: "cover",
    opacity: 0.7,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
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
        className="relative top-0 z-40 bg-white w-screen flex flex-wrap items-center justify-between"
        /* lg:w-[74%] */
      >
        <div style={navbgWrapperStyles} className="h-full" />
        <div className="container flex flex-row mx-auto justify-between p-5 w-screen h-full z-10">
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
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-white"
                >
                  <path
                    d="M24.9825 7.61333C24.4625 7.09333 23.6225 7.09333 23.1025 7.61333L16.5825 14.12L10.0625 7.59999C9.54248 7.07999 8.70248 7.07999 8.18248 7.59999C7.66248 8.11999 7.66248 8.95999 8.18248 9.47999L14.7025 16L8.18248 22.52C7.66248 23.04 7.66248 23.88 8.18248 24.4C8.70248 24.92 9.54248 24.92 10.0625 24.4L16.5825 17.88L23.1025 24.4C23.6225 24.92 24.4625 24.92 24.9825 24.4C25.5025 23.88 25.5025 23.04 24.9825 22.52L18.4625 16L24.9825 9.47999C25.4891 8.97333 25.4891 8.11999 24.9825 7.61333Z"
                    fill="#131517"
                  />
                </svg>
              </span>
            ) : (
              <span className="fill-current h-9 w-9 flex flex-col items-center justify-center">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-white flex"
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
                  href="/"
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
        <div className="mx-2 flex flex-col bg-white my-5">
          <a
            href="/2023"
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
        <div className="mx-2 flex justify-center min-w-52 bg-white border-yellow-500 border-4 my-5">
          <a
            href="/"
            className="font-clashDisplay font-bold  p-5 text-black tracking-wider w-full mx-5 w-fit flex items-center justify-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Register &nbsp;
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
