import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="md:flex-row bg-dark-blue-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
    >
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
            name: "Amanda Casari",
            title: "Engineering Manager | Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of ",
            value: ""
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.dummyPng,
            alt: "An amazing picture of ",
            value: ""
          },
          {
            name: "Eriol Fox",
            title: "Design Lead, Ushahidi",
            image: speakers.dummyPng,
            alt: "An amazing picture of Jon ",
            value: ""
          },
          {
            name: "Aniedi Udo-Obong",
            title: "Developer Relations, Sub-Saharan Africa | Google",
            image: speakers.dummyPng,
            alt: "An amazing picture of ",
            value: ""
          }
        ].map(speaker => (
          <div key={speaker.name} className="relative w-full md:w-1/4 max-w-sm rounded my-8 md:my-24 px-2">
            <img className="w-full" src={speaker.image} alt={speaker.alt + speaker.name} />
            <div className="-mt-20 px-4">
              <h2 className="font-bold text-lg">{speaker.name}</h2>
              <p className="text-sm">{speaker.title}</p>
            </div>
          </div>
        ))}
        <div className="float-right">
          <a href="/speakers" className="px-6 py-3 border-2 order-white text-white rounded-lg text-center uppercase">
            See all Speakers
          </a>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
