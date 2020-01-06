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
    companyName: "Your Company",
    image: sponsors.dummyImage,
    link: "https://opencollective.com/osca/"
  },
  {
    tier: "silver",
    companyName: "Open Core Summit",
    image: sponsors.ocs,
    link: "https://opencoresummit.com/"
  },
  {
    tier: "bronze",
    companyName: "Salesforce",
    image: sponsors.salesforce,
    link: "https://engineering.salesforce.com"
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
    <section id="sponsors" className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 pb-20 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Sponsors</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="my-8">
        {/* Headline Sponsors */}
        <h1 className="line text-spo font-bold">
          Headline <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:my-6 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("headline"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.companyName}
                className="relative lg:w-1/4 max-w-sm rounded my-6 px-3 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Diamond sponsors */}
        <h1 className="line text-spo font-bold">
          Diamond <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("diamond"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.companyName}
                className="relative lg:w-1/4 max-w-sm rounded my-6 px-3 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Gold sponsors */}
        <h1 className="line text-spo font-bold">
          Gold <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("gold"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.companyName}
                className="relative lg:w-1/4 max-w-sm rounded my-6 px-3 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Silver sponsors */}
        <h1 className="line text-spo font-bold">
          Silver <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("silver"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.companyName}
                className="relative lg:w-1/4 max-w-sm rounded my-6 px-3 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Bronze sponsors */}
        <h1 className="line text-spo font-bold">
          Bronze <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 lg:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("bronze"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.companyName}
                className="relative lg:w-1/4 max-w-sm rounded my-6 px-3 lg:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Individual Sponsors */}
        <h1 className="line text-spo font-bold">
          Open Collective Backers <span></span>
        </h1>
        <div className="overflow-hidden mt-4">
          <object
            aria-label="Open Collective Backers"
            type="image/svg+xml"
            data="https://opencollective.com/osca/backer.svg?avatarHeight=50&width=300"
          ></object>
        </div>
      </div>

      <div className="relative mt-20 text-center">
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
