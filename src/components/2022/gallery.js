import React from "react";

import { gallery, patterns } from "../cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white lg:flex-row pt-3 lg:pt-5">
      <div id="about" className="moving-text flex">
        <img alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold mx-5"> #OSCAFEST22</h4>
        <img alt="Two sided arrow" src={patterns.twoSidedArrow} />
      </div>

      <div className="flex flex-wrap text-white">
        {[
          {
            day: "Day 1",
            tag: "Workshop",
            image: gallery.one,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713316605613"
          },
          {
            day: "Day 1",
            tag: "Sustain Africa",
            image: gallery.two,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713315626001"
          },
          {
            day: "Day 2",
            tag: "Conference Day 1",
            image: gallery.three,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713321504593"
          },
          {
            day: "Day 3",
            tag: "Conference Day 2",
            image: gallery.four,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713320683546"
          }
        ].map((gallery) => (
          <a
            href={gallery.href}
            key={gallery.tag}
            className="gallery-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="cursor-pointer">
              <img className="w-auto mx-auto" src={gallery.image} alt={`An amazing photograph from ${gallery.tag}.`} />
              <div className="z-0 -mt-20 pt-4 px-6 w-auto h-20 text-white relative">
                <p className="text-sm lg:text-xs bg-orange-primary mb-1 table">{gallery.day}</p>
                <h3 className="font-bold text-base bg-orange-primary table">{gallery.tag}</h3>
              </div>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
