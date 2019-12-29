import React from "react";

import { sponsors, patterns } from "../components/cloudImages";

const sponsorsData = [
  {
    tier: "headline",
    companyName: "Facebook Open Source",
    image: sponsors.facebookOSS,
    link: "https://opensource.facebook.com/"
  },
  {
    tier: "diamond",
    companyName: "Google Open Source",
    image: sponsors.googleOSS,
    link: "https://opensource.google/"
  },
  {
    tier: "gold",
    companyName: "",
    image: sponsors.dummyImage,
    link: "https://opencollective.com/osca/"
  },
  {
    tier: "silver",
    companyName: "",
    image: sponsors.dummyImage,
    link: "https://opencollective.com/osca/"
  },
  {
    tier: "bronze",
    companyName: "Salesforce",
    image: sponsors.salesforce,
    link: "https://salesforce.com/"
  },
  {
    tier: "bronze",
    companyName: "Webflow",
    image: sponsors.webflow,
    link: "https://webflow.com/"
  },
  {
    tier: "bronze",
    companyName: "Open Source Collective",
    image: sponsors.osc,
    link: "https://www.oscollective.org/"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-5xl font-bold font-ubuntu">Sponsors</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 mt-6">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="my-8">
        {/* Headline Sponsors */}
        <h1 className="line font-bold">
          Headline <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:my-6 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("headline"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full lg:w-1/4 max-w-sm rounded my-6 px-2 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Diamond Sponsors */}
        <h1 className="line font-bold">
          Diamond <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("diamond"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full lg:w-1/4 max-w-sm rounded my-6 px-2 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Gold Sponsors */}
        <h1 className="line font-bold">
          Gold <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("gold"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full lg:w-1/4 max-w-sm rounded my-6 px-2 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Silver Sponsors */}
        <h1 className="line font-bold">
          Silver <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("silver"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full lg:w-1/4 max-w-sm rounded my-6 px-2 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Bronze Sponsors */}
        <h1 className="line font-bold">
          Bronze <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("bronze"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full lg:w-1/4 max-w-sm rounded my-6 px-2 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Individual Sponsors */}
        <h1 className="line font-bold">
          Open Collective Backers <span></span>
        </h1>
        <div className="overflow-hidden mt-4">
          <object
            aria-label="Open Collective Backers"
            type="image/svg+xml"
            data="https://opencollective.com/osca/backer.svg?avatarHeight=50&amp;width=320"
          ></object>
        </div>
      </div>

      <div className="relative mt-24 text-center">
        <a
          href="https://opencollective.com/open-source-festival-2020-4abe0517/donate"
          className="bg-orange-primary text-brown px-6 py-4 rounded-lg uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
