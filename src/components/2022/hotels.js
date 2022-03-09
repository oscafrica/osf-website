import React from "react";

import { hotels } from "./cloudImages";

function Hotels() {
  return (
    <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-2">
      <div className="flex flex-wrap">
        <div className="w-full text-dark-blue-primary-600">
          <h1 className="text-spo font-bold font-anisette">ACCOMMODATION</h1>
          <p className="text-base mt-4">
            The organizers of OSCA FESTIVAL aim to promote a comfortable and flexible lodging experience for attendees.
            Nigeria provides a large number and wide range of hotels, which you can book on the usual online sites. Here
            are a few recommendations according to your budget.{" "}
            <b>We encourage all attendees to make reservations early as prices may change.</b>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap text-white mt-8 mb-12">
        {[
          {
            name: "Million Dollars Imperial Hotel",
            image: hotels.million,
            price: "Starts at 6500/night.",
            duration: "~32 minutes drive to the venue.",
            link: "https://goo.gl/maps/fmiYCbUrQJKa9oUU7"
          },
          {
            name: "Hotel Newcastle",
            image: hotels.newcastle,
            price: "Starts at ₦12,050/night.",
            duration: "~2 minutes drive to the venue.",
            link: "https://goo.gl/maps/UjEi3yNPz4YUP4vcA"
          },
          {
            name: "H53 SUITES",
            image: hotels.h53,
            price: "Starts at ₦19000/night.",
            duration: "~17 minutes drive to the venue.",
            link: "https://goo.gl/maps/hTjbv2LxVCYquQkt6"
          },
          {
            name: "Banex Hotel & Suites",
            image: hotels.banex,
            price: "Starts at ₦20,000/night.",
            duration: "~6 minutes drive to the venue.",
            link: "https://goo.gl/maps/2TDaL8vvvBM3scdy8"
          },
          {
            name: "Splendour Luxury Hotel & Suites",
            image: hotels.splendour,
            price: "Starts at ₦25,550/night.",
            duration: "~8 minutes drive to the venue.",
            link: "https://goo.gl/maps/hDWonsZi5X6WjHFr8"
          },
          {
            name: "Airbnb",
            image: hotels.airbnb,
            price: "Starts $30/night.",
            duration: "See available spaces around the venue",
            link: "https://www.airbnb.com/s/Gbagada--Lagos"
          }
        ].map((hotel) => (
          <a href={hotel.link} key={hotel.name} className="relative w-full h-full lg:w-1/3 max-w-sm rounded px-2 mt-4">
            <figure className="cursor-pointer w-full">
              <img className="w-auto mx-auto" src={hotel.image} alt={`An amazing photograph of ${hotel.name}.`} />
              <div className="z-0 -mt-20 pt-8 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <h3 className="font-bold text-base">{hotel.name}</h3>
              </div>
            </figure>
            <div className="my-2">
              <p className="text-black">
                <span className="font-bold">₦</span>
                &nbsp;{hotel.price}
              </p>
              <p className="text-black">
                <span className="font-bold" role="img" aria-label="A car emoji">
                  🚗
                </span>
                &nbsp;{hotel.duration}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="relative my-12 text-center lg:text-right">
        <a
          href="https://www.google.com/maps/search/Hotels/@6.5598938,3.3584354,14z/data=!3m1!4b1!4m22!1m13!4m12!1m4!2m2!1d6.7386955!2d7.7841286!4e1!1m6!1m2!1s0x103b8d73a658782b:0x7a1de11d89cccc84!2szone+tech+park+maps!2m2!1d3.37684!2d6.5514308!2m7!3m6!1sRestaurants!2sZone+Tech+Park!3s0x103b8d73a658782b:0x7a1de11d89cccc84!4m2!1d3.3766075!2d6.5511999"
          className="p-6 bg-orange-primary text-dark uppercase"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all Nearby Hotels
        </a>
      </div>
    </section>
  );
}

export default Hotels;
