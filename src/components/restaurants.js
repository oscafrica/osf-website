import React from "react";

import { restaurants } from "../components/cloudImages";

function Restaurants() {
  return (
    <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-2">
      <div className="flex flex-wrap">
        <div className="w-full text-dark-blue-primary-600">
          <h1 className="text-spo font-bold font-ubuntu">RESTAURANTS</h1>
          <p className="text-base mt-4">Hungry? Stop by whenever you can and get something tasty</p>
        </div>
      </div>

      <div className="flex flex-wrap text-white mt-8 mb-12">
        {[
          {
            name: "Chicken Republic",
            image: restaurants.cr,
            link: "https://goo.gl/maps/mT7ej9vguui65LBV6"
          },
          {
            name: "Kentucky Fried Chicken (KFC)",
            image: restaurants.kfc,
            link: "https://goo.gl/maps/FZ1eDkbkPDm2GEHPA"
          },
          {
            name: "Bukka Hut",
            image: restaurants.bukka,
            link: "https://goo.gl/maps/1p16bL7JaTeCavS4A"
          }
        ].map(restaurant => (
          <a
            href={restaurant.link}
            key={restaurant.name}
            className="relative w-full h-full lg:w-1/3 max-w-sm rounded px-2 mt-4"
          >
            <figure className="cursor-pointer w-full">
              <img
                className="w-auto mx-auto"
                src={restaurant.image}
                alt={`An amazing photograph of ${restaurant.name}.`}
              />
              <div className="z-0 -mt-20 pt-4 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <h3 className="font-bold text-base">{restaurant.name}</h3>
              </div>
            </figure>
          </a>
        ))}
      </div>

      <div className="relative my-12 text-center lg:text-right">
        <a
          href="https://www.google.com/maps/search/Restaurants/@6.559895,3.3584354,14z/data=!3m1!4b1!4m22!1m13!4m12!1m4!2m2!1d6.7386955!2d7.7841286!4e1!1m6!1m2!1s0x103b8d73a658782b:0x7a1de11d89cccc84!2szone+tech+park+maps!2m2!1d3.37684!2d6.5514308!2m7!3m6!1sRestaurants!2sZone+Tech+Park!3s0x103b8d73a658782b:0x7a1de11d89cccc84!4m2!1d3.3766075!2d6.5511999"
          className="px-6 py-3 border-2 border-dark text-dark rounded-lg uppercase"
        >
          See all Nearby Restaurants
        </a>
      </div>
    </section>
  );
}

export default Restaurants;
