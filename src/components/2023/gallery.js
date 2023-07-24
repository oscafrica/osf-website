import React from "react";

import { gallery } from "./cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="lg:flex-row bg-white">
      <div className="lg:flex lg:flex-wrap text-white">
        {[
          {
            day: "Day 0",
            tag: "Sustain Africa",
            image: gallery.one,
            href: "https://flic.kr/s/aHBqjAKNq2"
          },
          {
            day: "Day 1",
            tag: "Workshop + Conference",
            image: gallery.two,
            href: "https://flic.kr/s/aHBqjANqno"
          },
          {
            day: "Day 2",
            tag: "Conference",
            image: gallery.three,
            href: "https://flic.kr/s/aHBqjANxYi"
          }
        ].map((gallery) => (
          <a
            href={gallery.href}
            key={gallery.day}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 ${gallery.day === "Day 0" ? "lg:basis-full" : "lg:basis-1/2"}`}
          >
            <img
              className="group-hover:scale-125 transition-all ease-in-out delay-0 w-auto mx-auto h-full brightness-75"
              src={gallery.image}
              alt={`An amazing photograph from ${gallery.tag}.`}
            />
            <div className="z-0 -mt-20 px-6 w-auto h-20 text-white relative">
              <p className="font-clashDisplay p-1 text-sm lg:text-xs mb-2 table uppercase">{gallery.day}</p>
              <h1 className="font-clashDisplay font-bold p-1 text-xl lg:text-2xl table">{gallery.tag}</h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
