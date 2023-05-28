import React from "react";
import { homeBackground } from "./cloudImages";

function Register() {
  return (
    <div className="font-clashDisplay font-semibold text-black uppercase relative group">
      <button
        className="bg-orange-400 text-brown uppercase p-3 text-l tracking-wider mb-1 shadow-md w-full flex flex-row"
        disabled
      >
        <span className="grow">Register</span>
        <span className="flex items-center">
          &nbsp; | &nbsp;
          <span className="group-hover:hidden">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.46967 1.11029C0.762563 0.817402 1.23744 0.817402 1.53033 1.11029L6 5.57996L10.4697 1.11029C10.7626 0.817402 11.2374 0.817402 11.5303 1.11029C11.8232 1.40319 11.8232 1.87806 11.5303 2.17096L6.53033 7.17096C6.23744 7.46385 5.76256 7.46385 5.46967 7.17096L0.46967 2.17096C0.176777 1.87806 0.176777 1.40319 0.46967 1.11029Z"
                fill="#3B2102"
              />
            </svg>
          </span>
          <span className="hidden group-hover:block">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.46967 1.11029C5.76256 0.817402 6.23744 0.817402 6.53033 1.11029L11.5303 6.11029C11.8232 6.40319 11.8232 6.87806 11.5303 7.17096C11.2374 7.46385 10.7626 7.46385 10.4697 7.17096L6 2.70129L1.53033 7.17096C1.23744 7.46385 0.762563 7.46385 0.46967 7.17096C0.176777 6.87806 0.176777 6.40319 0.46967 6.11029L5.46967 1.11029Z"
                fill="#22282F"
              />
            </svg>
          </span>
        </span>
      </button>
      <div className="bg-white p-3 text-l tracking-wider shadow-md w-full absolute z-20 hidden group-hover:block">
        <a
          href="https://eventbrite.com/e/open-source-festival-2023-tickets-574820402297"
          className="flex items-center p-3"
          target="_blank"
          rel="noreferrer"
        >
          USD ($)
        </a>
        <hr className="bg-black h-[1px] my-1" />
        <a href="https://bit.ly/oscafest23-tix" className="flex items-center p-3" target="_blank" rel="noreferrer">
          Naira (₦)
        </a>
      </div>
    </div>
  );
}

function Header() {
  const bgWrapperStyles = {
    backgroundImage: `url(${homeBackground.background})`,
    backgroundSize: "contain"
  };
  return (
    <section id="header">
      <div className="center overflow-hidden flex flex-col w-screen object-cover lg:pt-10">
        <div
          className="px-5 md:px-10 lg:px-0 flex flex-col z-30 left-0 w-full min-h-screen lg:pt-16 relative"
          style={bgWrapperStyles}
        >
          <span
            className="lg:block w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] z-5 absolute blur-[54px] right-[-170px] top-[-76.95px] lg:top-[-181.36px]" /* left-[175.64px] lg:left-[850.81px] top-[-96.95px] lg:top-[-181.36px] */
            style={{
              background:
                "radial-gradient(34.85% 34.85% at 50% 50%, rgba(245, 185, 255, 0.5) 0%, rgba(121, 255, 191, 0.125) 50.52%, rgba(187, 251, 255, 0.02) 100%)"
            }}
          ></span>
          <div className="container mt-10 lg:mt-20 mx-auto lg:px-14 flex justify-between sm:flex-row flex-col mb-6 lg:mb-10 lg:items-center">
            <h1 className="font-humane text-white text-4xl lg:text-6xl m-0 uppercase">
              OPEN SOURCE FESTIVAL 2023 + SUSTAIN
            </h1>
            <div className="hidden lg:block">
              <Register />
            </div>
          </div>
          <div className="z-10 flex flex-wrap items-center">
            <div className="w-full h-full mx-auto container text-white flex flex-col items-center">
              <div>
                <span
                  className="lg:block w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] z-10 absolute blur-[100px] left-[-252.98px] lg:left-[-48px] top-[289.83px] lg:top-[477px]"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 26, 0.41) 0%, rgba(255, 2, 230, 0.27) 50.52%, rgba(212, 0, 255, 0) 100%)"
                  }}
                ></span>
                <img
                  alt="OSCAFest Title 2023 Sustainability For Growth"
                  src={homeBackground.titleLarge}
                  className="mb-10"
                />
                <div className="flex flex-col mb-14 lg:mb-8 uppercase text-right lg:-mt-48 lg:-mr-32">
                  <div className="font-clashDisplay text-xs md:text-lg lg:text-base tracking-widest m-0 mb-3 text-right">
                    <h3>June 15TH -</h3>
                    <h3>17TH.</h3>
                  </div>
                  <div className="font-humane font-wide text-4xl md:text-5xl lg:text-5xl m-0 tracking-wider">
                    <h2>Landmark Event Center,</h2>
                    <h2>Lagos, Nigeria.</h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="block lg:hidden w-full mx-auto mb-3">
                  <Register />
                </div>
                <div className="mb-20">
                  <a
                    href="/2022"
                    className="font-clashDisplay font-semibold bg-transparent text-white border-2 border-solid border-white-400 uppercase p-3 text-l tracking-wider w-fit flex items-center"
                  >
                    View Past Events &nbsp; | &nbsp;
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

export default Header;
