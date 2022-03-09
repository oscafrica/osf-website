import React from "react";
import { patterns, videos } from "./cloudImages";
import Modal from "react-modal";

function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="">
        <div className="z-10 absolute -mr-4" />
        <video autoPlay muted loop id="osca" className="z-1 hidden lg:block object-cover w-screen h-full">
          <source src={videos.mainBg} type="video/mp4" />
        </video>
        <img alt="Background" className="lg:hidden h-screen w-screen object-cover bg-fixed" src={videos.mainBgMobile} />
      </div>
      <div className="flex flex-col z-30 absolute left-0 w-full min-h-screen">
        <div className="z-20 flex flex-wrap px-4 md:px-10 lg:px-20 xl:px-40 2xl:px-72 pt-2 md:pt-60 lg:pt-24 xl:pt-36 2xl:pt-80 mt-28 md:mt-10 lg:mt-14 mb-24 md:mb-0 lg:mb-12 lg:flex-row sm:text-left">
          <div className="w-full md:w-full sm:w-2/3 relative z-10 text-white">
            <h1 className="font-anisette text-3xl lg:text-5xl xl:text-7xl leading-tight font-bold uppercase">
              <div className="bg-orange-primary mb-2 table px-1 py-2">Open Source</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2">Festival 2022</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2"> + Sustain</div>
            </h1>
            <div className="font-anisette flex flex-wrap mt-4">
              <div className="text-lg md:text-md lg:text-lg uppercase bg-dark-blue-600 table mr-6 p-1">
                MARCH 24 - 26, 2022
              </div>
              <div className="lg:-ml-2 text-lg lg:text-xl uppercase bg-dark-blue-600 table p-1">Lagos, Nigeria | Hybrid</div>
            </div>
            <p className="font-anisette text-lg lg:text-lg uppercase bg-dark-blue-600 mt-2 table p-1"> #OSCAFEST2022</p>
            <p className="text-lg text-white-700 mt-4 table">
              An annual open source gathering under Open Source Community Africa
            </p>
            <div className="flex flex-wrap font-bold mt-10 md:mt-0">
              <a
                href="https://opencollective.com/osca/events/open-source-festival-2022-e08a15a2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-anisette text-xs w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-0 mr-5 mb-4 lg:mb-0 px-12 py-6 bg-orange-primary text-black text-center uppercase"
              >
                Register
              </a>
              <a
                href="/2020"
                target="_blank"
                rel="noopener noreferrer"
                className="font-anisette text-xs w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-0 px-12 py-6 bg-army-green-primary text-white text-center uppercase"
              >
                View past event
              </a>
            </div>
          </div>
          <div className="hidden lg:flex w-full play-video">
            <button onClick={() => setIsOpen(true)}>
              <img src={patterns.play} alt="play icon" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            zIndex: 1000,
            background: "rgba(0,0,0,0.6)"
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "transparent"
          }
        }}
        contentLabel="OSCAFest 2020 video"
      >
        <div className="relative z-40 w-screen h-screen lg:p-16">
          <div className="flex justify-end">
            <button className="text-white p-3" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hZc44FApgl0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}

export default Header;
