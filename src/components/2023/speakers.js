import React from "react";
import { Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./scrollbar.css";

import { homeBackground, speakers } from "./cloudImages";

const speakers2023 = [
  {
    name: "Angie Jones",
    title: "Global Vice President of Developer Relations for TBD, Block",
    image: speakers.angie
  },
  {
    name: "Brian Douglas",
    title: "Founder and CEO of Open Sauced",
    image: speakers.bdougie
  },
  {
    name: "Jan Borchardt",
    title: "Co-founder, design lead and community manager at Nextcloud",
    image: speakers.jan
  },
  {
    name: "Regina Nkenchor",
    title: "Board vice president at the GNOME Foundation",
    image: speakers.regina
  }
];

function Speaker() {
  const bgWrapperStyles = {
    backgroundImage: `url(${homeBackground.background})`,
    backgroundSize: "contain"
  };
  return (
    <section id="speakers" className="bg-[#1E1E1E] overflow-hidden" style={bgWrapperStyles}>
      <div className="container mx-auto px-5 lg:px-0 my-10 lg:my-20">
        <div className="font-humane font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
          <div className="text-white lg:-mb-16">Meet our</div>
          <div className="text-[#F7931E] leading-none">Speakers.</div>
        </div>

        <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            navigation
            slidesPerView={3.2}
            spaceBetween={30}
            scrollbar={{ draggable: true, dragSize: 379.38 }}
            className="speakers-carousel-2023 min-h-[34rem] w-full"
            autoplay={{ delay: 10_000 }}
          >
            {speakers2023.map((speaker) => (
              <SwiperSlide key={speaker.name}>
                <figure key={speaker.name} className="z-10 relative w-full h-full">
                  <img src={speaker.image} alt={`An amazing photograph of ${speaker.name}.`} />
                  <div className="z-40 2xl:w-[80%] absolute -mt-28 mx-4 h-16 lg:h-20 text-xs lg:text-lg text-left text-white uppercase">
                    <h3 className="font-classDisplay font-bold">{speaker.name}</h3>
                    <p className="font-classDisplay font-light">{speaker.title}</p>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:hidden grid sm:grid-cols-2 gap-4 text-white my-4 justify-center">
          {speakers2023.map((speaker) => (
            <figure key={speaker.name} className="z-10 relative w-full h-full lg:w-1/3 xl:w-1/4 max-w-sm">
              <img
                className="w-auto mx-auto relative"
                src={speaker.image}
                alt={`An amazing photograph of ${speaker.name}.`}
              />
              <div className="absolute -mt-16 mx-4 h-16 lg:h-20 text-xs lg:text-lg text-left text-white uppercase">
                <h3 className="font-classDisplay font-bold">{speaker.name}</h3>
                <p className="font-classDisplay font-light">{speaker.title}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speaker;
