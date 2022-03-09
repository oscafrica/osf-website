import React from "react";

import { gallery } from "./cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white lg:flex-row pt-3 lg:pt-5">

      <div className="lg:flex lg:flex-wrap text-white">
        {[
          {
            day: "Day 1",
            tag: "Workshop",
            image: gallery.one,
            href: ""
          },
          {
            day: "Day 1",
            tag: "Sustain Africa",
            image: gallery.two,
            href: ""
          },
          {
            day: "Day 2",
            tag: "Conference Day 1",
            image: gallery.three,
            href: ""
          },
          {
            day: "Day 3",
            tag: "Conference Day 2",
            image: gallery.four,
            href: ""
          }
        ].map((gallery) => (
          // <a
          //   href={gallery.href}
          //   key={gallery.tag}
          //   target="_blank"
          //   rel="noopener noreferrer"
          // >
            <figure className="cursor-pointer gallery-images" key={gallery.tag}>
              <img className="w-auto mx-auto" src={gallery.image} alt={`An amazing photograph from ${gallery.tag}.`} />
              <div className="z-0 -mt-20 px-6 w-auto h-20 text-white relative">
                <p className="font-anisette p-1 text-sm lg:text-xs bg-orange-primary mb-2 table uppercase">{gallery.day}</p>
                <h3 className="font-anisette p-1 text-xl lg:text-2xl font-bold bg-orange-primary table uppercase">{gallery.tag}</h3>
              </div>
            </figure>
          // </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
