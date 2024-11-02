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
            <div className="flex flex-col items-center w-full h-full my-24 m-auto lg:w-7/12 text-white">
              <img alt="OSCAFest 2025" src={homeBackground.title} className="md:hidden mb-5 w-80" />
              <img alt="OSCAFest 2025" src={homeBackground.titleLarge} className="hidden md:flex mb-5" />
              <div className="flex flex-col w-full ">
                <text className="font-clashDisplay text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center justify-center tracking-widest text-white  w-full">
                  {" "}
                  JUNE 19 - JUNE 21, 2025
                </text>
              </div>
              <div className="lg:mx-5">
                <div className="flex flex-col md:flex-row mt-5 sm:mb-16 md:mb-10 lg:mb-0 lg:p-0 items-center">
                  <a
                    href="/sponsorship-deck-2025.pdf"
                    className="font-clashDisplay font-bold bg-white hover:bg-gray-100 m-4 p-6 mx-5 w-80 lg:w-fit text-center text-black tracking-wider text-lg"
                  >
                    Become a Sponsor
                  </a>
                  <a
                    href="https://oscafrica.org/discord"
                    className="font-clashDisplay font-bold bg-yellow-500 hover:bg-yellow-400 m-4 p-6 mx-5 w-80 lg:w-fit text-center text-black tracking-wider text-lg"
                  >
                    Become a Speaker
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
