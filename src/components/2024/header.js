import React from "react";
import { homeBackground } from "./cloudImages";

function Header() {
  const bgWrapperStyles = {
    backgroundImage: `url(${homeBackground.background})`,
    backgroundSize: "cover"
  };

  return (
    <section id="home" className="flex-1 flex overflow-auto">
      <div className="center flex flex-col flex-1 w-screen object-cover bg-no-repeat">
        <div style={bgWrapperStyles} className="flex flex-1 flex-col z-30 left-0 w-full lg:pt-16 overflow-hidden">
          <div className="z-20 flex flex-wrap  m-auto items-center">
            <div className="w-full h-full sm:mt-36 sm:m-auto sm:my-24 sm:px-10 sm:container lg:mt-16 m-auto lg:w-7/12 text-white flex flex-col items-center">
              <img alt="OSCAFest Title 2025" src={homeBackground.title} className="mb-5" />
              <div className="flex flex-col w-full ">
                <text className="font-clashDisplay lg:text-5xl text-3xl text-center justify-center tracking-widest text-white  w-full">
                  {" "}
                  JUNE 12 - JUNE 14, 2025
                </text>
              </div>
              <div className="lg:mx-5">
                <div className="flex sm:flex-row flex-col mt-5 sm:mb-16 md:mb-10 lg:mb-0 lg:p-0">
                  <a
                    href="mailto:event@oscafrica.org"
                    className="font-clashDisplay font-bold bg-white p-6 m-4 lg:text-lg md:text-base text-black tracking-wider mx-5 w-fit flex items-center"
                  >
                    Become a Sponsor &nbsp;
                  </a>
                  <a
                    href="/"
                    className="font-clashDisplay font-bold bg-yellow-500 m-4 p-6 w-fit flex items-center text-black tracking-wider lg:text-lg md:text-base mx-5"
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
