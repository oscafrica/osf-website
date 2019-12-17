import { Link } from "gatsby";
import React, { useState } from "react";

import { logo, patterns } from "../components/cloudImages";

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="w-full bg-dark-blue-primary fixed top-0 left-0 z-50 px-2 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-1">
      <div className="absolute left-0 fixed">
        <img
          className="-pl-4"
          src={patterns.navRec}
          alt="An Africa Pattern Design"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between max-w-8xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <img
            alt="OSCAFRICA Logo"
            className="block mx-auto w-12"
            src={logo.pngOrange}
          />
        </Link>

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-4 w-8"
            viewBox="0 0 25 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <line y1="1" x2="25" y2="1" stroke="white" strokeWidth="2" />
            <path d="M6 10H25" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? "block" : "hidden"
          } md:block md:flex md:items-center w-full md:w-auto text-center`}
        >
          {[
            {
              route: "#about",
              title: "About"
            },
            {
              route: "#speakers",
              title: "Speakers"
            },
            {
              route: "#travel",
              title: "Travel"
            },
            {
              route:
                "https://opencollective.com/osca/events/open-source-festival-2020-4abe0517",
              title: "Register"
            },
            {
              route: "#sponsor",
              title: "Sponsorship"
            }
          ].map(link => (
            <a
              className="block md:inline-block mt-4 md:mt-0 md:ml-8 no-underline text-white text-nav uppercase"
              key={link.title}
              href={link.route}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
