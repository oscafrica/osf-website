import React from "react";

import { sponsors } from "./cloudImages";

const sponsorsData = [
  {
    tier: "diamond",
    name: "Meta",
    image: sponsors.facebookOSS,
    link: "https://opensource.facebook.com/"
  },
  {
    tier: "headline",
    name: "Google Open Source",
    image: sponsors.google2022,
    link: "https://opensource.google/"
  },
  {
    tier: "diamond",
    name: "Coil",
    image: sponsors.coil,
    link: "https://opensource.google/"
  },
  {
    tier: "diamond",
    name: "Sourcegragh",
    image: sponsors.sourceGraph,
    link: "https://opensource.google/"
  },
  {
    tier: "gold",
    name: "GitHub",
    image: sponsors.github,
    link: "https://github.com"
  },
  {
    tier: "silver",
    name: "Edge and node",
    image: sponsors.ocs,
    link: "https://opencoresummit.com/"
  },
  {
    tier: "silver",
    name: "AWS Amplify",
    image: sponsors.aws,
    link: "https://aws.amazon.com/amplify/"
  },
  {
    tier: "silver",
    name: "Cloud Native Computing Foundation",
    image: sponsors.cncf,
    link: "https://www.cncf.io/"
  },
  {
    tier: "bronze",
    name: "OpenSuse",
    image: sponsors.opensuse,
    link: "https://engineering.salesforce.com"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white-smoke text-center lg:flex-row px-4 lg:px-40 pt-12 pb-20 lg:pt-24">
      <div className="flex flex-wrap justify-center">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Sponsors</h1>
        </div>
      </div>

      <div className="my-12">
        {/* Headline Sponsors */}
        <h1 className="text-h1 font-bold uppercase">
          Headline
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter((data) => data.tier.includes("headline"))
            .map((sponsor) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="=w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Diamond sponsors */}
        <h1 className="text-h2 font-bold uppercase">
          Diamond
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter((data) => data.tier.includes("diamond"))
            .map((sponsor) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Gold sponsors */}
        <h1 className="text-h3 font-bold uppercase">
          Gold
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter((data) => data.tier.includes("gold"))
            .map((sponsor) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Silver sponsors */}
        <h1 className="text-h4 font-bold uppercase">
          Silver
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter((data) => data.tier.includes("silver"))
            .map((sponsor) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Bronze sponsors */}
        <h1 className="text-h5 font-bold uppercase">
          Bronze
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter((data) => data.tier.includes("bronze"))
            .map((sponsor) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Individual Sponsors */}
        <h1 className="text-h6 font-bold uppercase">
          Open Collective Backers
        </h1>
        <div className="text-center mt-4">
          <object
            aria-label="Open Collective Backers"
            type="image/svg+xml"
            data="https://opencollective.com/osca/backer.svg?avatarHeight=50&width=320"
            className="my-12"
          ></object>
        </div>
      </div>

      <div className="relative mt-20 text-center">
        <a
          href="https://opencollective.com/open-source-festival-2020-4abe0517/donate"
          className="bg-orange-primary text-brown px-6 py-4 uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
