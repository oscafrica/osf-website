import React from "react";
import { sponsorship, videos } from "../cloudImages";
function Header() {
  return (
    < >
      <div>
        <div className="z-10 bg-bg-black opacity-50 absolute object-cover h-screen" />
          <video autoPlay muted loop id="osca" className="z-1 hidden lg:block object-cover w-screen h-full">
            <source src={videos.mainBg} type="video/mp4" />
        </video>
          <img alt="Background" className="lg:hidden h-screen w-screen object-cover" src={sponsorship.background} />
      </div>
      <div className="flex flex-col z-30 absolute top-20 left-0 w-full min-h-screen">
        <div className="z-20 flex flex-wrap lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative sm:w-2/3 lg:w-1/2 z-10 text-white">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">
                <div className="bg-orange-primary mb-2 table px-1">Open Source</div>
               <div className="bg-orange-primary mb-2 table px-1">Festival 2022</div>
                <div className="bg-orange-primary mb-2 table px-1"> + Sustain</div>
              </h1>
          <div className="font-ubuntu flex flex-wrap mt-2 justify-content-between">
             <div className="text-lg lg:text-xl uppercase bg-dark-blue-600 table mr-5 px-1">
               MARCH 24 - 26,2022
             </div>
             <div className="lg:-ml-2 text-lg lg:text-xl uppercase bg-dark-blue-600 table px-1">
               Lagos, Nigeria | hybrid
             </div>
           </div>
          <p className="text-lg lg:text-xl uppercase bg-dark-blue-600 mt-2 table px-1"> #OSCAFEST2022</p>
             <p className="text-lg lg:text-xl text-white-700 mt-4 table">
               An annual open source gathering under <br /> Open Source Community Africa
             </p>
            <div className="flex">
              <a
              href="https://opencollective.com/osca/events/open-source-festival-2020-4abe0517"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-8 mr-5 px-12 py-3 bg-orange-primary text-black text-center uppercase flex justify-center items-center"
            >
                Register
            </a>
            <a
              href="/2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-8 px-12 py-3 bg-army-green-primary text-white text-center uppercase"
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


