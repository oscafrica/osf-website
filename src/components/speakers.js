import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section className="md:flex-row bg-dark-blue-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48">
      <div className="absolute left-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-5xl font-bold">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6 text-white">
          <img src={patterns.speakers} alt="" className="" />
        </div>
      </div>

      <div className="flex flex-wrap text-white">
        {[
          {
            name: "Jon Bellion",
            title: "Program Manager, Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of Jon Bellion",
            value: ""
          },
          {
            name: "Jon Bellion",
            title: "Program Manager, Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of Jon Bellion",
            value: ""
          },
          {
            name: "Jon Bellion",
            title: "Program Manager, Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of Jon Bellion",
            value: ""
          },
          {
            name: "Jon Bellion",
            title: "Program Manager, Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of Jon Bellion",
            value: ""
          }
        ].map(speaker => (
          <div key={speaker.name} className="w-full md:w-1/4 max-w-sm rounded my-8 md:my-24 px-4">
            <img className="w-full z-20" src={speaker.image} alt={speaker.alt} />
            <div className="z-10 -mt-20 px-4 bg-dark-blue-500">
              <h2 className="font-bold text-xl">{speaker.name}</h2>
              <p className="text-base">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speaker;
