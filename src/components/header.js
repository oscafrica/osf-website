import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { patterns } from "../components/cloudImages";

function Header() {
  return (
    <div>
      <section className="z-20 flex flex-wrap md:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 md:pt-40 md:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="absolute left-0 fixed">
          <img
            className="-mt-24 -mb-12 -pl-4"
            src={patterns.headerRec}
            alt="An Africa Pattern Design"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative sm:w-2/3 lg:w-1/2 z-10 text-white">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold uppercase">
            Open Source Festival 2020 + Sustain OSS
          </h1>
          <div className="flex flex-wrap mt-2">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="calendar" />
              </i>
              20TH - 22ND FEB, 2020
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 md:-ml-12 uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="map-marker-alt" />
              </i>
              Lagos, Nigeria
            </div>
          </div>
          <p className="text-base text-gray-700 mt-4">
            An annual open source gathering under <br /> Open Source Community
            Africa
          </p>
          <a
            href="https://opencollective.com/osca/events/open-source-festival-2020-4abe0517"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-2 bg-orange-primary text-black rounded-lg text-center uppercase"
          >
            Register
          </a>
        </div>

        <div className="w-full -mt-48 md:mt-0 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
          <img
            className="pl-24"
            src={patterns.africanMap}
            alt="Map of Africa Pattern Design"
          />
        </div>
      </section>
    </div>
  );
}

export default Header;
