import React from "react";

import { gallery } from "./cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white lg:flex-row">
      <div className="lg:flex lg:flex-wrap text-white">
        {[
          {
            day: "Day 1",
            tag: "Conference Day 1",
            image: gallery.one,
            href: "https://flic.kr/s/aHBqjzNEgd"
          },
          {
            day: "Day 1",
            tag: "Sustain Africa",
            image: gallery.two,
            href: "https://flic.kr/s/aHBqjzNG55"
          },
          {
            day: "Day 2",
            tag: "Conference Day 2",
            image: gallery.three,
            href: "https://flic.kr/s/aHBqjzNG7w"
          },
          {
            day: "Day 3",
            tag: "Conference Day 3",
            image: gallery.four,
            href: "https://flic.kr/s/aHBqjzNJBJ"
          }
        ].map((gallery) => (
          <a href={gallery.href} key={gallery.tag} target="_blank" rel="noopener noreferrer" className="gallery-images">
            <img className="w-auto mx-auto" src={gallery.image} alt={`An amazing photograph from ${gallery.tag}.`} />
            <div className="z-0 -mt-20 px-6 w-auto h-20 text-white relative">
              <p className="font-anisette p-1 text-sm lg:text-xs bg-orange-primary mb-2 table uppercase">
                {gallery.day}
              </p>
              <h3 className="font-anisette p-1 text-xl lg:text-2xl font-bold bg-orange-primary table uppercase">
                {gallery.tag}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
