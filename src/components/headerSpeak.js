import React from "react";

import { patterns } from "../components/cloudImages";

function HeaderSpeak() {
  return (
    <section>
      <div className="flex flex-wrap md:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 md:pt-40 md:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="absolute left-0 fixed">
          <img
            className="fixed -mt-24 -mb-12 -pl-4"
            src={patterns.headerRec}
            alt="An Africa Pattern Design"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative sm:w-2/3 lg:w-1/2 z-10 text-white">
          <h1 className="font-ubuntu text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">
            Speakers
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeaderSpeak;