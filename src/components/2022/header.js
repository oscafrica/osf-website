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
        <div className="z-20 flex flex-wrap mt-20 lg:mt-10 mb-36 lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
          <div className="w-full md:w-full xl:w-1/2 lg:w-1/2 sm:w-2/3 mb-4 relative z-10 text-white">
            <h1 className="font-anisette text-3xl md:text-xl lg:text-5xl leading-tight font-bold uppercase">
              <div className="bg-orange-primary mb-2 table px-1 py-2">Open Source</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2">Festival 2022</div>
              <div className="bg-orange-primary mb-2 table px-1 py-2"> + Sustain</div>
            </h1>
            <div className="font-anisette flex flex-wrap mt-2 justify-content-between">
              <div className="text-lg md:text-md lg:text-lg uppercase bg-dark-blue-600 table mr-5 p-1">MARCH 24 - 26, 2022</div>
              <div className="lg:-ml-2 text-lg md:text-md lg:text-lg uppercase bg-dark-blue-600 table p-1">
                Lagos, Nigeria | Hybrid
              </div>
            </div>
            <p className="font-anisette text-lg lg:text-lg uppercase bg-dark-blue-600 mt-2 table p-1"> #OSCAFEST2022</p>
            <p className="text-md md:text-sm lg:text-md text-white-700 mt-4 table">
              An annual open source gathering under Open <br />
              Source Community Africa
            </p>
            <div className="flex font-bold mt-10 md:mt-0">
              <a
                href="https://opencollective.com/osca/events/open-source-festival-2022-e08a15a2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-anisette text-xs w-1/2 block sm:inline-block sm:w-auto lg:mt-8 md:mt-0 mr-5 px-12 py-6 bg-orange-primary text-black text-center uppercase"
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
