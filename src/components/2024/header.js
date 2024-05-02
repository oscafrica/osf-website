import React from "react";
import { homeBackground } from "./cloudImages";
import { Link } from "gatsby";

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
      <div className="bg-white p-3 text-l tracking-wider shadow-md w-full absolute z-20 invisible group-hover:visible transition-all ease-in-out delay-75">
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
    backgroundSize: "cover"
  };
  const navbgWrapperStyles = {
    backgroundImage: `url(${homeBackground.navBackground})`,
  }

  return (
    <section id="home">
      <div className="center flex flex-col flex-1 w-screen object-cover bg-no-repeat">
        <div
          style={bgWrapperStyles}
          className="flex flex-col z-30 left-0 w-full min-h-screen lg:pt-16 overflow-hidden"
        >
          <div className="z-20 flex flex-wrap  m-auto items-center">
            <div className="w-full h-full sm:mt-36 sm:m-auto sm:my-24 lg:mt-16 m-auto lg:w-7/12 text-white flex flex-col items-center">
              <img Alt="OSCAFest Title 2025" src={homeBackground.title} className="mb-5 lg:px-7" />
              <div className="flex flex-col w-full ">  
                <text className="font-clashDisplay text-6xl text-center justify-center tracking-widest text-white0 w-full"> MAY 30TH - JUNE 1ST</text>
              </div>
              <div className="lg:mx-5">
                <div className="flex sm:flex-row flex-col mt-5 sm:mb-16 md:mb-10 lg:mb-0 lg:p-0">
                  <a
                    href="https://opencollective.com/osca/events/open-source-festival-2023-e17954c1"
                    className="font-clashDisplay font-bold bg-white p-6 m-4 text-lg text-black tracking-wider mx-5 w-fit flex items-center"
                  >
                    Become a Sponsor &nbsp;
                  </a>
                  <a
                    href="/"
                    className="font-clashDisplay font-bold bg-yellow-500 m-4 p-6 w-fit flex items-center text-black tracking-wider text-lg mx-5"
                  >
                    Become a Speaker &nbsp;
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
