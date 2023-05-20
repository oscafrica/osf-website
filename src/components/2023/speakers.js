import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";

import { speakers } from './cloudImages';

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
              },
            ].map((speaker) => (
              <SwiperSlide key={speaker.name}>
                <div className="w-full h-full">
                  <div className='object-fit h-96 lg:h-[500px] w-full bg-cover bg-center brightness-90 flex flex-row' style={{backgroundImage: `url(${speaker.image})`}}>
                    <div className="h-20 m-4 mt-auto text-left text-white uppercase">
                      <h3 className="font-classDisplay font-bold">{speaker.name}</h3>
                      <p className="font-classDisplay font-light">{speaker.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </section>
  );
}

export default Speaker;
