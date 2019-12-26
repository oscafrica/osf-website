import React from "react";

import { sponsors, patterns } from "../components/cloudImages";

const sponsorsData = [
  {
    tier: "headline",
    companyName: "Google",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "headline",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "https://opensource.facebook.com/"
  },
  {
    tier: "headline",
    companyName: "Google",
    image: sponsors.google,
    link: ""
  },
  {
    tier: "headline",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  }
];

function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-white-smoke md:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
    >
      <div className="absolute left-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 md:mb-12 w-full md:w-1/2 text-dark-blue-primary">
          <h1 className="text-5xl font-bold font-ubuntu">Sponsors</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6">
          <img src={patterns.speakers} alt="" className="w-auto" />
        </div>
      </div>

      {/* Headline Sponsors */}
      <h3 className="line font-medium">
        Headline <span></span>
      </h3>
      <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
        {sponsorsData
          .filter(data => data.tier.includes("headline"))
          .map(sponsors => (
            <a
              href={sponsors.link}
              key={sponsors.companyName}
              className="relative w-2/4 h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8"
            >
              <figure className="w-full">
                <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
              </figure>
            </a>
          ))}
      </div>

      {/* Diamond Sponsors */}
      <h3 className="line font-medium">
        Diamond <span></span>
      </h3>
      <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
        {sponsorsData
          .filter(data => data.tier.includes("diamond"))
          .map(sponsors => (
            <a
              href={sponsors.link}
              key={sponsors.companyName}
              className="relative w-2/4 h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8"
            >
              <figure className="w-full">
                <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
              </figure>
            </a>
          ))}
      </div>

      {/* Gold Sponsors */}
      <h3 className="line font-medium">
        Gold <span></span>
      </h3>
      <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
        {sponsorsData
          .filter(data => data.tier.includes("gold"))
          .map(sponsors => (
            <a
              href={sponsors.link}
              key={sponsors.companyName}
              className="relative w-2/4 h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8"
            >
              <figure className="w-full">
                <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
              </figure>
            </a>
          ))}
      </div>

      {/* Silver Sponsors */}
      <h3 className="line font-medium">
        Silver <span></span>
      </h3>
      <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
        {sponsorsData
          .filter(data => data.tier.includes("silver"))
          .map(sponsors => (
            <a
              href={sponsors.link}
              key={sponsors.companyName}
              className="relative w-2/4 h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8"
            >
              <figure className="w-full">
                <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
              </figure>
            </a>
          ))}
      </div>

      {/* Bronze Sponsors */}
      <h3 className="line font-medium">
        Bronze <span></span>
      </h3>
      <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
        {sponsorsData
          .filter(data => data.tier.includes("bronze"))
          .map(sponsors => (
            <a
              href={sponsors.link}
              key={sponsors.companyName}
              className="relative w-2/4 h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8"
            >
              <figure className="w-full">
                <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
              </figure>
            </a>
          ))}
      </div>

      <div className="mx-auto mt-12 mb-24 absolute md:mr-40">
        <a
          href="https://opencollective.com/osca/"
          className="bg-orange-primary text-brown px-6 py-4 rounded-lg text-center uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
