import React from "react";

import { speakers, patterns } from "./cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="relative bg-army-green-primary flex-wrap lg:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24"
    >
      <div className="flex flex-wrap justify-center">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-white text-center">
          <h1 className="text-4xl xl:text-5xl font-bold font-anisette uppercase">
            Meet our <br /> Speakers
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap text-white my-8 justify-center">
        {[
          {
            name: "Anjana Vakil",
            title: "Developer Advocate | Observable",
            image: speakers.anjana
          },
          {
            name: "Tejas Kumar",
            title: "Director of Developer Relations | Xatabase",
            image: speakers.tejas
          },
          {
            name: "Ruth Ikegah",
            title: "GitHub Star and Technical Writer",
            image: speakers.ruth
          },
          {
            name: "Nader Dabit",
            title: "Developer Relations Engineer | Edge&Node",
            image: speakers.nader
          },
          {
            name: "Prosper Otemuyiwa",
            title: "Staff Developer Advocate | Sourcegraph",
            image: speakers.prosper
          },
          {
            name: "Stefan Thomas",
            title: "Founder & CEO | Coil",
            image: speakers.stefan
          },
          {
            name: "Dmitry Vinnik",
            title: "Open Source Developer Advocate | Meta",
            image: speakers.dmitry
          },
          {
            name: "Minko Gechev",
            title: "Developer Relations Lead | Google",
            image: speakers.minko
          }
          // {
          //   name: "Chris Aniszczyk",
          //   title: "CTO | Cloud Native Computing Foundation",
          //   image: speakers.dummyImage
          // },
          // {
          //   name: "Segun Adebayo",
          //   title: "Creator | Chakra UI",
          //   image: speakers.dummyImage
          // },
          // {
          //   name: "Odunayo Eweniyi",
          //   title: "Cofounder/COO | PiggybankNG",
          //   image: speakers.dummyImage
          // },
          // }
        ].map((speaker) => (
          <figure key={speaker.name} className="z-10 relative w-full h-full lg:w-1/3 xl:w-1/4 max-w-sm p-1 my-2">
            <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}.`} />
            <div className="text-sm py-8 px-4 w-auto h-32 bg-white text-center text-black">
              <h3 className="font-anisette font-bold uppercase">{speaker.name}</h3>
              <p className="font-workSans">{speaker.title}</p>
            </div>
          </figure>
        ))}
      </div>
      <div className="font-anisette text-xs relative z-10 mt-20 justify-center text-center flex lg:flex-row space-x-8">
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
