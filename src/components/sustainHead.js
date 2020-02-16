import React from "react";

import { patterns } from "../components/cloudImages";

function SustainHead() {
  return (
    <section>
      <div className="bg-dark-blue-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 sm:pb-6 lg:pt-32 lg:pt-32 xl:pb-24 2xl:pt-56 2xl:pb-48">
        <div className="absolute left-0 fixed">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="" />
        </div>
        <div className="text-white items-center py-32">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">Sustain Africa 2020</h1>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            Google Developers Space, 7a Milverton Rd, Ikoyi, Lagos.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mt-4"> 20th Februrary, 2020 | 5:00 PM Prompt </p>
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
