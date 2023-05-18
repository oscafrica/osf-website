import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { speakers } from "./cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="bg-[#1E1E1E]"
    >
      <div className="container mx-auto my-20">

        <div className="font-humane font-medium text-[10rem] lg:text-[20rem] leading-none uppercase">
          <div className="text-white lg:-mb-16">Meet our</div>
          <div className="text-[#F7931E] leading-none">Speakers.</div>
        </div>

        <Swiper
            modules={[Pagination]}

            navigation
            slidesPerView={3.2}
            spaceBetween={30}
            // freeMode={true}
            // centeredSlides={true}
            pagination={{ clickable: true }}
            
            className="carousel"
        >
          {
            [
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
                name: "Odunayo Eweniyi",
                title: "Cofounder/COO | PiggybankNG",
                image: speakers.odun
              },
              {
                name: "Minko Gechev",
                title: "Developer Relations Lead | Google",
                image: speakers.minko
              },
              {
                name: "Segun Adebayo",
                title: "Creator & Maintainer | Chakra UI",
                image: speakers.segun
              },
              {
                name: "Chris Aniszczyk",
                title: "CTO | Cloud Native Computing Foundation",
                image: speakers.chris
              }
            ].map((speaker) => (
              <SwiperSlide key={speaker.name} className="">
                {/* <figure key={speaker.name} className="z-10 relative w-full h-full lg:w-1/3 xl:w-1/4 max-w-sm p-1 my-2"> */}
                  {/* TODO: name and title overlay and fix progress bar */}
                  <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}.`} />
                  {/* <div className="text-sm py-8 px-4 w-auto h-32 bg-white text-center text-black">
                    <h3 className="font-anisette font-bold uppercase">{speaker.name}</h3>
                    <p className="font-workSans">{speaker.title}</p>
                  </div> */}
                {/* </figure> */}
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </section>
  );
}

export default Speaker;
