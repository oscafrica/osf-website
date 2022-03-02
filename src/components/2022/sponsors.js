import React from "react";

import { sponsors } from "./cloudImages";

const sponsorsData = [
  {
    tier: "headline",
    name: "Google Open Source",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "headline",
    name: "Google Open Source",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "headline",
    name: "Google Open Source",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "diamond",
    name: "Meta",
    image: sponsors.google,
    link: "https://opensource.facebook.com/"
  },
  {
    tier: "diamond",
    name: "Coil",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "diamond",
    name: "Sourcegragh",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "diamond",
    name: "Sourcegragh",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "gold",
    name: "GitHub",
    image: sponsors.google,
    link: "https://github.com"
  },
  {
    tier: "gold",
    name: "GitHub",
    image: sponsors.google,
    link: "https://github.com"
  },
  {
    tier: "silver",
    name: "Edge and node",
    image: sponsors.google,
    link: "https://opencoresummit.com/"
  },
  {
    tier: "silver",
    name: "AWS Amplify",
    image: sponsors.google,
    link: "https://aws.amazon.com/amplify/"
  },
  {
    tier: "silver",
    name: "Cloud Native Computing Foundation",
    image: sponsors.google,
    link: "https://www.cncf.io/"
  },
  {
    tier: "bronze",
    name: "OpenSuse",
    image: sponsors.google,
    link: "https://engineering.salesforce.com"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white text-center lg:flex-row px-4 lg:px-40 pt-12 pb-20 lg:pt-24">
      <div className="flex flex-wrap justify-center">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Sponsors</h1>
        </div>
      </div>

      <div className="my-12">
        {/* Headline Sponsors */}
        <p className="text-h4 font-bold uppercase">
          Headline
        </p>
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
        <p className="text-h4 font-bold uppercase">
          Diamond
        </p>
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
        <p className="text-h4 font-bold uppercase">
          Gold
        </p>
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
        <p className="text-h4 font-bold uppercase">
          Silver
        </p>
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
        <p className="text-h4 font-bold uppercase">
          Bronze
        </p>
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

      </div>

      <div className="relative mt-20 text-center">
        <a
          href="/docs/sponsorship-guide.pdf"
          className="bg-orange-primary text-brown p-5 uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
