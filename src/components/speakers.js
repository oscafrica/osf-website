import React from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="bg-dark-blue-primary md:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
    >
      <div className="absolute left-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 md:mb-12 w-full md:w-1/2 text-white">
          <h1 className="text-5xl font-bold font-ubuntu">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6 text-white">
          <img src={patterns.speakers} alt="" className="w-auto" />
        </div>
      </div>

      <div className="cursor-pointer flex flex-wrap text-white">
        {[
          {
            name: "Amanda Casari",
            title: "Engineering Manager | Google",
            image: speakers.amanda,
            bio: `Amanda Casari is an engineering manager on the Google Open Source team, where she is leading research and engineering to better understand open source systems.  She has worked in a breadth of cross-functional roles and engineering disciplines for the last 18 years, including developer relations, data science, complexity science, and robotics.  She creates projects and programs to make the data world more responsible and approachable, recently co-authoring the O'Reilly book, Feature Engineering for Machine Learning Principles and Techniques for Data Scientists.
            Amanda is endlessly fascinated by the difference between the systems we aim to create and the ones that emerge.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.stephen,
            bio: `Stephen is a principal program manager in the Azure Office of the CTO at Microsoft. Prior to that, he has been a distinguished technologist (HPE), technical executive, a founder, a consultant, a writer, a systems developer, a software construction geek, and a standards diplomat.
            He loves to build teams and products that make customers ecstatic. He has worked in the IT industry since 1980 as both customer and vendor, working with open source for almost 30 years.`,
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
            bio: `Aniedi is an information professional with over 12 years practical experience working with Nigerian startups spanning human resources, media, finance, education, and logistics.
            He currently manages developer community relationships for Google across West, East and Southern Africa.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Prosper Otemuyiwa",
            title: "Co-founder | Eden & forloop Africa",
            image: speakers.prosper,
            bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            twitter: "#",
            linkedin: "#"
          },
          {
            name: "Marlene Mhangami",
            title: "Director | PSF & Co-founder | ZimboPy",
            image: speakers.marlene,
            bio: `Marlene is a PSF Director and the co-founder of ZimboPy, a Zimbabwean non-profit that empowers women to pursue careers in tech. Marlene is also the current chair of Pycon Africa, the first pan-African gathering of the Python community.
            She currently lives in Harare and has played an active role in assisting the growth of Python communities both locally and across the continent for the past three years.`,
            twitter: "#",
            linkedin: "#"
          }
        ].map(speaker => (
          <div key={speaker.name} className="relative w-full h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8">
            <Popup
              className="w-full"
              trigger={
                <figure className="w-full">
                  <img
                    className="w-auto mx-auto"
                    src={speaker.image}
                    alt={`An amazing photograph of ${speaker.name}`}
                  />
                  <div className="z-0 -mt-20 pt-4 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
                    <h3 className="font-bold text-base">{speaker.name}</h3>
                    <p className="text-sm md:text-xs">{speaker.title}</p>
                  </div>
                </figure>
              }
              modal
            >
              {close => (
                <div className="font-avenir flex flex-col md:flex-row items-center my-2 mx-2 text-dark-blue-primary">
                  <button
                    className="flex flex-col bg-circle-gray text-dark-blue rounded-full h-6 w-6 items-center absolute top-0 right-0 cursor-pointer mt-6 mr-4 z-50"
                    onClick={close}
                  >
                    &times;
                  </button>
                  <figure className="w-full md:w-1/4">
                    <img
                      className="mt-12 pb-8 md:pl-4 md:mt-16"
                      alt={`An amazing photograph of ${speaker.name}`}
                      src={speaker.image}
                    />
                    <div className="mb-8 md:pl-4 md:py-4">
                      <h3 className="md:-mt-8 font-bold text-base">{speaker.name}</h3>
                      <p className="text-sm md:text-xs">{speaker.title}</p>
                    </div>
                  </figure>

                  <div className="w-full md:w-3/4">
                    <blockquote className="md:absolute md:fixed md:top-0 px-0 md:mt-20 md:px-10 text-base text-justify tracking-tighter text-dark-blue-500">
                      {speaker.bio}
                    </blockquote>
                    <div className="absolute fixed bottom-0 md:w-3/4 md:px-8 md:mb-16">
                      <a
                        aria-label="Twitter"
                        className="pl-1 pr-6 font-bold no-underline text-dark-blue text-sm"
                        href={speaker.twitter}
                      >
                        <i className="bg-circle-gray rounded-full p-oc-10">
                          <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </i>
                      </a>

                      <a
                        aria-label="LinkedIn"
                        className="font-bold no-underline text-dark-blue text-sm"
                        href={speaker.linkedin}
                      >
                        <i className="bg-circle-gray rounded-full p-oc-10">
                          <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 mb-24 absolute right-0 md:mr-40">
        <a href="/" className="px-6 py-3 border-2 border-white text-white rounded-lg text-center uppercase">
          See all Speakers
        </a>
      </div>
    </section>
  );
}

export default Speaker;
