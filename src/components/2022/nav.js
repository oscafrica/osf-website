import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { logo } from "./cloudImages";

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 120 ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div
        className={`${navbar ? "bg-army-green-primary" : "bg-transparent"}
        z-40 w-full fixed top-0 left-0 px-2 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-1`}
      >
        <div
          className={`${
            isExpanded ? "bg-army-green-primary" : "bg-transparent"
          } flex flex-wrap items-center justify-between max-w-8xl mx-auto p-2 lg:py-10`}
        >
          <Link className="z-20 flex items-center no-underline text-white" to="/">
            <img
              alt="Open Source Community Africa's Logo"
              className="block mx-auto w-12 xl:w-20"
              src={logo.svgOrange}
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
                route: "/#about",
                title: "About"
              },
              {
                route: "/#speakers",
                title: "Speakers"
              },
              {
                route: "/travel",
                title: "Travel"
              },
              {
                route: "https://opencollective.com/osca/events/open-source-festival-2022-e08a15a2",
                title: "Register"
              },
              {
                route: "/sponsorship-guide-2022.pdf",
                title: "Sponsorship"
              },
              {
                route: "/sustain-africa",
                title: "Sustain Africa"
              }
            ].map((link) => (
              <a
                className="font-workSans block mt-0 mb-auto no-underline text-white text-xl lg:inline-block lg:-my-2 lg:ml-8 lg:text-sm uppercase font-bold"
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
