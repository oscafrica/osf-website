import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { logo, patterns } from "../components/cloudImages";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);
config.autoAddCss = false;

function SustainHead() {
  return (
    <section>
      <div className="bg-dark-blue-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-8 sm:pb-4 lg:pt-32 2xl:pt-56">
        <div className="absolute left-0 fixed">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="" />
        </div>
        <div className="text-white items-center py-32">
          <img className="mb-12" src={logo.sustain} alt="OSCA and Sustain OSS Logo" />
          <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 text-lg lg:text-xl text-gray-700 mt-4 uppercase">
            <i className="pr-2">
              <FontAwesomeIcon icon="map-marker-alt" />
            </i>
            Google Developers Space, 7a Milverton Rd, Ikoyi, Lagos, Nigeria.
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 text-lg lg:text-xl text-gray-700 mt-4 uppercase">
            <i className="pr-2">
              <FontAwesomeIcon icon="calendar" />
            </i>
            Thursday, 20th February, 2020
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 text-lg lg:text-xl text-gray-700 mt-4 uppercase">
            <i className="pr-2">
              <FontAwesomeIcon icon="clock" />
            </i>
            04:00 PM Prompt
          </div>
          <a
            href="https://www.google.com/maps/dir/7.7860243,6.7386955/google+developer+space+in+lagos/@7.1884798,2.8066988,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103bf54c9624f8c7:0xb0a6fcfa510af77d!2m2!1d3.4447841!2d6.4502841"
            className="w-1/2 block sm:inline-block sm:w-auto mt-12 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}

export default SustainHead;
