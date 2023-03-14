import React from "react";
import { homeBackground } from "./cloudImages";
function Home() {
  return (
    <section id="home">
      <div className="center flex flex-col w-screen h-screen object-cover">
        <img alt="Background" src={homeBackground.background} className="w-screen h-full object-cover lg:block z-1" />
        <div className="flex flex-col z-30 absolute left-0 w-full min-h-screen">
          <div className="z-20 flex flex-wrap  m-auto items-center">
            <div className="w-full md:w-full sm:mt-36 sm:m-auto sm:my-24 m-auto  text-white flex flex-col items-center">
              <img alt="osca-logo" src={homeBackground.logo} className="mb-5 w-16" />
              <img Alt="OSCAFest Title 2023 Sustainability For Growth" src={homeBackground.title} className="mb-5" />
              <div className="flex flex-col mb-14 items-center">
                <h2 className="font-clashDisplay text-xl tracking-widest m-0">JUNE 22ND - 24TH.</h2>
                <h1 className="font-clashDisplay text-2xl m-0 uppercase tracking-widest">Lagos, Nigeria.</h1>
              </div>
              <div>
                <div className="flex sm:flex-row flex-col mt-5 sm:mb-16 md:mb-10 ">
                  <a
                    href="https://opencollective.com/osca/events/open-source-festival-2023-e17954c1"
                    className="font-clashDisplay bg-orange-400 uppercase p-4 text-xl text-brown tracking-wider mb-4 mx-4"
                  >
                    Become a Sponsor | ↗
                  </a>
                  <a
                    href="/"
                    className="font-clashDisplay bg-transparent uppercase mb-4 p-4 text-white border-2 border-solid border-gray-500 tracking-wider text-xl mx-4"
                  >
                    Become a Speaker | ↗
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <a href="/2022" className="font-clashDisplay uppercase p-2 text-white tracking-wider text-xl sm:my-10 my-10">
                    View Past Events | ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// lg:pt-60 xl:pt-60 md:mt-60 xl:mt-0 2xl:mt-0 xs:mt-24

export default Home;
