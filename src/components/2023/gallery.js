import React from "react";

import { gallery } from "./cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 text-white">
        {[
          {
            day: "Day 1",
            tag: "Conference Day",
            image: gallery.one,
            href: "https://flic.kr/s/aHBqjzNEgd"
          },
          {
            day: "Day 2",
            tag: "Conference Day",
            image: gallery.two,
            href: "https://flic.kr/s/aHBqjzNG55"
          },
          {
            day: "Day 3",
            tag: "Conference Day",
            image: gallery.three,
            href: "https://flic.kr/s/aHBqjzNG7w"
          },
          {
            day: "Day 4",
            tag: "Conference Day",
            image: gallery.four,
            href: "https://flic.kr/s/aHBqjzNJBJ"
          }
        ].map((gallery) => (
          <a
            href={gallery.href}
            key={gallery.tag}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden"
          >
            <img
              className="w-auto mx-auto w-full h-full brightness-50"
              src={gallery.image}
              alt={`An amazing photograph from ${gallery.tag}.`}
            />
            <div className="z-0 -mt-20 px-6 w-auto h-20 text-white relative">
              <p className="font-clashDisplay p-1 text-sm lg:text-xs mb-2 table uppercase">{gallery.day}</p>
              <h3 className="font-clashDisplay font-bold p-1 text-xl lg:text-2xl table">{gallery.tag}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
