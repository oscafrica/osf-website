import React from "react";

import { speakers, patterns } from "./cloudImages";

function Speaker() {
  return (
    <section id="speakers" className="relative bg-army-green-primary lg:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24">
      <div className="flex flex-wrap justify-center">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-white text-center">
          <h1 className="text-sec font-bold font-ubuntu uppercase">Meet our <br/> Speakers</h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white my-8">
        {[
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          },
          {
            name: "Developer Designer",
            title: "Senior DevLead | Netflix",
            image: speakers.dummyImage
          }
        ].map((speaker) => (
          <figure key={speaker.name} className="z-10 relative w-full h-full lg:w-1/4 max-w-sm rounded p-2 my-2">
            <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}.`} />
            <div className="p-8 px-2 w-auto bg-white text-center text-black">
              <h3 className="font-bold text-xl uppercase">{speaker.name}</h3>
              <p className="text-sm">{speaker.title}</p>
            </div>
          </figure>
        ))}
      </div>
      <div className="relative z-10 mt-20 justify-center text-center flex lg:flex-row space-x-8">
        <a href="/speakers" className="p-5 w-64 bg-orange-primary uppercase">
          See all Speakers
        </a>
        <a href="/schedule" className="p-5 w-64 bg-orange-primary uppercase">
          See full Schedule
        </a>
      </div>
      <div className="z-15 hidden lg:block absolute right-0 bottom-10">
        <img className="z-0 -mt-24 -mb-12 -pl-4 w-3/4" src={patterns.fullCircle} alt="" />
      </div>
    </section>
  );
}

export default Speaker;
