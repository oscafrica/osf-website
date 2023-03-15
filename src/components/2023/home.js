import React from "react";
import { homeBackground } from "./cloudImages";
function Home() {
  const bgWrapperStyles = {
    backgroundImage: `url(${homeBackground.background})`,
    backgroundSize: "contain"
  };
  return (
    <section id="home">
      <div className="center flex flex-col w-screen object-cover">
        <div
          style={bgWrapperStyles}
          className="flex flex-col z-30 absolute left-0 w-full min-h-screen lg:pt-16 overflow-hidden"
        >
          <div className="z-20 flex flex-wrap  m-auto items-center">
            <div className="w-full h-full sm:mt-36 sm:m-auto sm:my-24 lg:mt-16 m-auto lg:w-8/12 text-white flex flex-col items-center">
              <img alt="osca-logo" src={homeBackground.logo} className="mb-5 w-16" />
              <img Alt="OSCAFest Title 2023 Sustainability For Growth" src={homeBackground.title} className="mb-5" />
              <div className="flex flex-col mb-14 items-center lg:mb-8">
                <h2 className="font-clashDisplay text-l lg:text-l tracking-widest m-0">JUNE 22ND - 24TH.</h2>
                <h1 className="font-clashDisplay text-xl lg:text-2xl m-0 uppercase tracking-widest">Lagos, Nigeria.</h1>
              </div>
              <div>
                <div className="flex sm:flex-row flex-col mt-5 sm:mb-16 md:mb-10 lg:mb-0">
                  <a
                    href="https://opencollective.com/osca/events/open-source-festival-2023-e17954c1"
                    className="font-clashDisplay bg-orange-400 uppercase p-3 text-l text-brown tracking-wider mb-4 mx-4 w-fit flex items-center"
                  >
                    Become a Sponsor |
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                        stroke="#3B2102"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="font-clashDisplay bg-transparent uppercase mb-4 p-3 w-fit flex items-center text-white border-2 border-solid border-gray-500 tracking-wider text-l mx-4"
                  >
                    Become a Speaker |
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="/2022"
                    className="font-clashDisplay uppercase p-2 text-white tracking-wider text-l sm:my-10 my-10 flex items-center"
                  >
                    View Past Events |
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
