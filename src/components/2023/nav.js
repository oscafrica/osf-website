import React, { useState } from "react";
import { Link } from "gatsby";

import { homeBackground } from "./cloudImages";

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <div
        className={"container inset-x-0 mx-auto fixed top-0 z-40 bg-white mt-10 sm:px-8 lg:px-16 xl:px-10 2xl:px-64"}
      >
        <div
          className={`${
            isExpanded ? "bg-army-green-primary" : "bg-transparent"
          } flex flex-wrap items-center justify-between max-w-8xl mx-auto p-2 lg:py-5`}
        >
          <Link className="z-20 flex items-center no-underline text-white" to="/">
            <img
              alt="Open Source Community Africa's Logo"
              className="block mx-auto w-12 xl:w-20"
              src={homeBackground.logo}
            />
          </Link>

          <button
            className="block lg:hidden items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            {isExpanded ? (
              <svg className="fill-current h-4 w-8" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Close Menu</title>
                <path
                  d="M11.0494 1.17733L1.65261 10.5744M1.65234 1.17733L11.0494 10.5744"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="fill-current h-4 w-8" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <line y1="1" x2="25" y2="1" stroke="white" strokeWidth="2" />
                <path d="M6 10H25" stroke="white" strokeWidth="2" />
              </svg>
            )}
          </button>

          <nav
            className={`${
              isExpanded ? "block" : "hidden"
            } flex flex-col py-24 min-h-screen min-w-full text-center lg:py-0 lg:block lg:flex-row lg:items-center lg:w-auto lg:min-h-0 lg:min-w-0 font-workSans`}
          >
            {[
              {
                route: "/2023/#about",
                title: "About"
              },
              {
                route: "/2023/#speakers",
                title: "Speakers"
              },
              // {
              //   route: "/2023/schedule",
              //   title: "Schedule"
              // },
              // {
              //   route: "/2023/sustain-africa",
              //   title: "Sustain Africa"
              // },
              // {
              //   route: "/2023/travel",
              //   title: "Travel"
              // },
              {
                route: "https://www.flickr.com/photos/oscafrica/albums/with/72177720298698442",
                title: "Gallery"
              }
            ].map((link) => (
              <a
                className="font-workSans block mt-0 mb-auto no-underline text-black text-xl lg:inline-block lg:-my-2 lg:ml-8 lg:text-sm uppercase font-bold"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
