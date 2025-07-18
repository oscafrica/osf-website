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
        className="relative top-0 z-40 bg-neutral-900 w-screen flex flex-wrap items-center justify-between"
        /* lg:w-[74%] */
      >
        <div style={navbgWrapperStyles} className="h-full" />
        <div className="container flex flex-row mx-auto justify-between p-5 w-screen h-full z-10">
          <Link className="z-20 flex items-center" to="/">
            <img
              alt="Open Source Community Africa's Logo"
              className="block mx-auto w-16 xl:w-20"
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
              <span className="fill-current">
                <svg width="69" height="48" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68" height="48" transform="translate(0.58252)" fill="white" />
                  <path
                    d="M42.9825 15.6133C42.4625 15.0933 41.6225 15.0933 41.1025 15.6133L34.5825 22.12L28.0625 15.6C27.5425 15.08 26.7025 15.08 26.1825 15.6C25.6625 16.12 25.6625 16.96 26.1825 17.48L32.7025 24L26.1825 30.52C25.6625 31.04 25.6625 31.88 26.1825 32.4C26.7025 32.92 27.5425 32.92 28.0625 32.4L34.5825 25.88L41.1025 32.4C41.6225 32.92 42.4625 32.92 42.9825 32.4C43.5025 31.88 43.5025 31.04 42.9825 30.52L36.4625 24L42.9825 17.48C43.4891 16.9733 43.4891 16.12 42.9825 15.6133Z"
                    fill="#131517"
                  />
                </svg>
              </span>
            ) : (
              <span className="fill-current">
                <svg width="69" height="48" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68" height="48" transform="translate(0.5)" fill="white" />
                  <path
                    d="M23.8333 32H45.1667C45.9 32 46.5 31.4 46.5 30.6667C46.5 29.9333 45.9 29.3333 45.1667 29.3333H23.8333C23.1 29.3333 22.5 29.9333 22.5 30.6667C22.5 31.4 23.1 32 23.8333 32ZM23.8333 25.3333H45.1667C45.9 25.3333 46.5 24.7333 46.5 24C46.5 23.2667 45.9 22.6667 45.1667 22.6667H23.8333C23.1 22.6667 22.5 23.2667 22.5 24C22.5 24.7333 23.1 25.3333 23.8333 25.3333ZM22.5 17.3333C22.5 18.0667 23.1 18.6667 23.8333 18.6667H45.1667C45.9 18.6667 46.5 18.0667 46.5 17.3333C46.5 16.6 45.9 16 45.1667 16H23.8333C23.1 16 22.5 16.6 22.5 17.3333Z"
                    fill="#131517"
                  />
                </svg>
              </span>
            )}
          </button>
          <nav
            id="desktop-nav"
            className="relative hidden lg:block flex-col py-24 text-white lg:text-black min-w-full text-center lg:py-0 lg:flex-row lg:items-center lg:w-auto lg:min-h-0 lg:min-w-0"
          >
            <div className="flex flex-row items-center">
              <div className="bg-white border-4 border-yellow-500 mx-2 w-60 flex sm:flex-row flex-col justify-center sm:mb-16 md:mb-10 lg:mb-0">
                <a
                  href="https://festival.oscafrica.org/register"
                  className="font-clashDisplay font-bold p-4 text-lg tracking-wider mx-5 w-fit flex items-center"
                >
                  Register
                </a>
              </div>
              <div className="bg-white mx-2 w-60 flex sm:flex-row flex-col justify-center sm:mb-16 md:mb-10 lg:mb-0">
                <Link
                  to="/speaker-schedule"
                  className="font-clashDisplay font-bold whitespace-nowrap  p-5 text-lg tracking-wider mx-5 w-fit flex items-center"
                >
                  Speaker Schedule
                  <svg
                    className="ml-4"
                    width="14"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="bg-white mx-2 w-60 flex sm:flex-row flex-col justify-center sm:mb-16 md:mb-10 lg:mb-0">
                <a
                  href="/past-events"
                  className="font-clashDisplay font-bold  p-5 text-lg tracking-wider mx-5 w-fit flex items-center"
                >
                  Past Events
                  <svg
                    className="ml-4"
                    width="14"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          <Link
            to="/speaker-schedule"
            className="font-clashDisplay font-bold  p-5 text-black tracking-wider whitespace-nowrap mx-5 flex items-center justify-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Speaker Schedule &nbsp;
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="mx-2 flex flex-col bg-white my-5">
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
        <div className="mx-2 flex justify-center min-w-52 bg-white border-yellow-500 border-4 my-5">
          <a
            href="https://festival.oscafrica.org/register"
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
