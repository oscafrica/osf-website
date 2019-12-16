import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div>
      <section
        className="flex flex-col md:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-48 sm:pb-64 md:pt-40 md:pb-48 lg:pt-40 xl:pb-64 2xl:pt-56 2xl:pb-96 text-center sm:text-left">
        <div>
          <div className="relative w-full sm:w-2/3 lg:w-1/2 z-10 text-white">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold uppercase">
            Open Source Festival 2020 + Sustain OSS
            </h1>
            <span className="pr-4 uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="calendar" />
              </i>
                20TH - 22ND FEB, 2020
            </span>
            <span className="uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="map-marker-alt" />
              </i>
                Lagos, Nigeria
            </span>
            <p className="text-base leading-snug text-gray-700 mt-4">
              An annual open source gathering under
              Open Source Community Africa
            </p>
            <a
              href="https://opencollective.com/osca/events/open-source-festival-2020-4abe0517"
              className="w-full block sm:inline-block sm:w-auto px-10 py-2 bg-orange-primary text-black rounded-lg mt-8 uppercase">
              Register
            </a>
          </div>

        </div>
      </section>
    </div >
  );
}

export default Header;
