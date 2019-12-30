import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section id="speakers" className="bg-dark-blue-primary lg:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-white">
          <h1 className="text-5xl font-bold font-ubuntu">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 mt-6 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap text-white my-8">
        {[
          {
            name: "Amanda Casari",
            title: "Engineering Manager | Google",
            image: speakers.amanda,
            sched: "#"
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.stephen,
            sched: "#"
          },
          {
            name: "Eriol Fox",
            title: "Design Lead | Ushahidi",
            image: speakers.eriol,
            sched: "#"
          },
          {
            name: "Aniedi Udo-Obong",
            title: "Developer Relations, Sub-Saharan Africa | Google",
            image: speakers.aniedi,
            sched: "#"
          },
          {
            name: "Prosper Otemuyiwa",
            title: "Co-founder | Eden & forloop Africa",
            image: speakers.prosper,
            sched: "#"
          },
          {
            name: "Marlene Mhangami",
            title: "Director | PSF & Co-founder | ZimboPy",
            image: speakers.marlene,
            sched: "#"
          },
          {
            name: "John Bellion",
            title: "Program Manager | Google",
            image: speakers.dummyImage,
            sched: "#"
          },
          {
            name: "Jane Bellion",
            title: "Program Manager | Google",
            image: speakers.dummyImage,
            sched: "#"
          }
        ].map(speaker => (
          <a
            href={speakers.sched}
            key={speaker.name}
            className="relative w-full h-full lg:w-1/4 max-w-sm rounded px-2 my-2"
          >
            <figure className="cursor-pointer w-full">
              <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}`} />
              <div className="z-0 -mt-20 pt-4 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
                <h3 className="font-bold text-base">{speaker.name}</h3>
                <p className="text-sm lg:text-xs">{speaker.title}</p>
              </div>
            </figure>
          </a>
        ))}
      </div>

      <div className="relative mt-12 text-center lg:text-right">
        <a href="/" className="px-6 py-3 border-2 border-white text-white rounded-lg uppercase">
          See all Speakers
        </a>
      </div>
    </section>
  );
}

export default Speaker;
