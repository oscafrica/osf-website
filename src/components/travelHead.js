import React from "react";

import { travel } from "../components/cloudImages";

function TravelHead() {
  return (
    <section>
      <div style={{ backgroundImage: `url("${travel.header}")` }} className="travel-bg w-full h-50 z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="text-white items-center">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">
            Zone Tech Park
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 mt-4">
          Plot 9 Gbagada Industrial Scheme, Beside UPS, Gbagada Expressway
          </p>
        </div>
      </div>
    </section>
  );
}

export default TravelHead;
