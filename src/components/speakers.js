import React from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="md:flex-row bg-dark-blue-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
    >
      <div className="absolute left-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 md:mb-0 w-full md:w-1/2 text-white">
          <h1 className="text-5xl font-bold font-ubuntu">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6 text-white">
          <img src={patterns.speakers} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap text-white">
        {[
          {
            name: "Amanda Casari",
            title: "Engineering Manager | Google",
            image: speakers.amanda,
            bio: `
            Amanda Casari is an engineering manager on the Google Open Source team, where she is leading research and engineering to better understand open source systems.  She has worked in a breadth of cross-functional roles and engineering disciplines for the last 18 years, including developer relations, data science, complexity science, and robotics.  She creates projects and programs to make the data world more responsible and approachable, recently co-authoring the O'Reilly book, Feature Engineering for Machine Learning Principles and Techniques for Data Scientists.  Amanda is endlessly fascinated by the difference between the systems we aim to create and the ones that emerge.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.stephen,
            bio: `
            Stephen is a principal program manager in the Azure Office of the CTO at Microsoft. Prior to that, he has been a distinguished technologist (HPE), technical executive, a founder, a consultant, a writer, a systems developer, a software construction geek, and a standards diplomat. He loves to build teams and products that make customers ecstatic. He has worked in the IT industry since 1980 as both customer and vendor, working with open source for almost 30 years.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Eriol Fox",
            title: "Design Lead | Ushahidi",
            image: speakers.eriol,
            bio: `Eriol is a Design Lead who has worked in-house roles for 9+ years. Currently working at Ushahidi, a humanitarian, non-profit technology leader, developing open-source, digital tools to help people with better democratic process, human rights issues, natural and human-made disasters"
            Eriol is a non-binary, queer person who uses they/them pronouns and an LGBTQIA+ advocate.
            They are deeply passionate about intersectional inclusion and promoting healthy attitudes towards mental health in the tech sector.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Aniedi Udo-Obong",
            title: "Developer Relations, Sub-Saharan Africa | Google",
            image: speakers.aniedi,
            bio: `
            nal with over 12 years practical experience working with Nigerian startups spanning human resources, media, finance, education, and logistics. He currently manages developer community relationships for Google across West, East and Southern Africa.`,
            twitter: "#",
            linkedin: "#"
          }
        ].map(speaker => (
          <div key={speaker.name} className="relative w-full h-full md:w-1/4 max-w-sm rounded my-2 md:my-8 px-2">
            <Popup
              trigger={
                <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}`} />
              }
              modal
            >
              {close => (
                <div className="font-avenir flex flex-col md:flex-row items-center my-2 mx-2 md:mx-2 text-dark-blue-primary">
                  <button
                    className="bg-modal-gray text-dark-blue block rounded-full absolute top-0 right-0 cursor-pointer flex flex-col items-center px-3 py-1 mt-2 mr-4 md:mt-6 md:mr-10 text-base z-50"
                    onClick={close}
                  >
                    &times;
                  </button>
                  <figure className="w-full md:w-1/4">
                    <img
                      className="md:mt-8 pb-8 md:pl-4 py-8"
                      alt={`An amazing photograph of ${speaker.name}`}
                      src={speaker.image}
                    />
                    <div className="md:pl-4">
                      <h3 className="font-bold text-base">{speaker.name}</h3>
                      <p className="text-sm md:text-xs">{speaker.title}</p>
                    </div>
                  </figure>

                  <div className="md:py-4 w-full md:w-3/4 md:mx-2">
                    <blockquote className="py-4 px-0 md:mt-4 md:px-4 text-sm text-justify tracking-tighter text-dark-blue-500">
                      {speaker.bio}
                    </blockquote>
                    <div className="md:w-3/4 md:mx-2 mt-4">
                      <a
                        aria-label="Twitter"
                        className="font-bold p-2 no-underline text-dark-blue text-lg"
                        href={speaker.twitter}
                      >
                        <i className="pr-2">
                          <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </i>
                      </a>

                      <a
                        aria-label="LinkedIn"
                        className="font-bold p-2 no-underline text-dark-blue text-lg"
                        href={speaker.linkedin}
                      >
                        <i className="pr-2">
                          <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <div className="z-0 -mt-20 pt-4 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
              <h3 className="font-bold text-base">{speaker.name}</h3>
              <p className="text-sm md:text-xs">{speaker.title}</p>
            </div>
          </div>
        ))}

        <div className="mx-auto mt-12">
          <a href="/speakers" className="px-6 py-3 border-2 border-white text-white rounded-lg text-center uppercase">
            See all Speakers
          </a>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
