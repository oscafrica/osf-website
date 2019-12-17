import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <div>
      <section className="md:flex-row bg-dark-blue-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 md:pt-40 md:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-5xl -p-4 font-bold">
              Meet our Speakers
            </h1>
          </div>
          <div className="w-full hidden md:block md:w-1/2 text-white">
            <img src={patterns.speakers} alt="" className="" />
          </div>
        </div>

        <div className="flex flex-wrap text-white">
          <div className="w-1/4 max-w-sm rounded overflow-hidden shadow-lg my-24 px-4">
            <img
              className="w-full"
              src={speakers.dummyPng}
              alt="a speaker"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">Jon Bellion</h2>
              <p className="text-base">Program Manager, Google</p>
            </div>
          </div>

          <div className="w-1/4 max-w-sm rounded overflow-hidden shadow-lg my-24 px-4">
            <img
              className="w-full"
              src={speakers.dummyPng}
              alt="a speaker"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">Jon Bellion</h2>
              <p className="text-base">Program Manager, Google</p>
            </div>
          </div>

          <div className="w-1/4 max-w-sm rounded overflow-hidden shadow-lg my-24 px-4">
            <img
              className="w-full"
              src={speakers.dummyPng}
              alt="a speaker"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">Jon Bellion</h2>
              <p className="text-base">Program Manager, Google</p>
            </div>
          </div>

          <div className="w-1/4 max-w-sm rounded overflow-hidden shadow-lg my-24 px-4">
            <img
              className="w-full"
              src={speakers.dummyPng}
              alt="a speaker"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">Jon Bellion</h2>
              <p className="text-base">Program Manager, Google</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Speaker;
