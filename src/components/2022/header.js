import React from "react";
import { videos } from "./cloudImages";
function Header() {
  return (
    <>
      <div className="bg-white py-80 lg:py-0">
        <div className="z-10 opacity-50 absolute" />
        <video autoPlay muted loop id="osca" className="z-1 hidden lg:block object-cover w-screen h-full">
          <source src={videos.mainBg} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col z-30 absolute top-20 left-0 w-full min-h-screen">
        <div className="z-20 flex flex-wrap lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
          <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative z-10 text-white">
            <h1 className="font-ubuntu text-4xl lg:text-7xl leading-tight font-bold uppercase">
              <div className="bg-orange-primary mb-2 table px-1 py-2">Open Source</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2">Festival 2022</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2"> + Sustain</div>
            </h1>
            <div className="font-ubuntu flex flex-wrap mt-2 justify-content-between">
              <div className="text-lg lg:text-xl uppercase bg-dark-blue-600 table mr-5 p-1">MARCH 24 - 26, 2022</div>
              <div className="lg:-ml-2 text-lg lg:text-xl uppercase bg-dark-blue-600 table p-1">
                Lagos, Nigeria | Hybrid
              </div>
            </div>
            <p className="text-lg lg:text-xl uppercase bg-dark-blue-600 mt-2 table p-1"> #OSCAFEST2022</p>
            <p className="text-lg lg:text-xl text-white-700 mt-4 table">
              An annual open source gathering under <br /> Open Source Community Africa
            </p>
            <div className="flex font-bold">
              <a
                href="https://opencollective.com/osca/events/open-source-festival-2022-e08a15a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-8 mr-5 px-12 py-6 bg-orange-primary text-black text-center uppercase"
              >
                Register
              </a>
              <a
                href="/2020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-8 px-12 py-6 bg-army-green-primary text-white text-center uppercase"
              >
                View past event
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
