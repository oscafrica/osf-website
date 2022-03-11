import React from "react";

import { sponsors } from "./cloudImages";
import Slider from "./slider";

const sponsorsData = [
  {
    tier: "headline",
    name: "Google",
    image: sponsors.google,
    link: "https://opensource.google"
  },
  {
    tier: "headline",
    name: "Meta",
    image: sponsors.meta,
    link: "https://opensource.fb.com"
  },
  {
    tier: "diamond",
    name: "Coil",
    image: sponsors.coil,
    link: "https://coil.com"
  },
  {
    tier: "diamond",
    name: "Sourcegragh",
    image: sponsors.sourcegraph,
    link: "https://sourcegraph.com"
  },
  {
    tier: "diamond",
    name: "Polygon",
    image: sponsors.polygon,
    link: "https://polygon.technology"
  },
  {
    tier: "gold",
    name: "AWS",
    image: sponsors.aws,
    link: "https://aws.amazon.com"
  },
  {
    tier: "gold",
    name: "GitHub",
    image: sponsors.github,
    link: "https://github.com"
  },
  // {
  //   tier: "gold",
  //   name: "Microsoft",
  //   image: sponsors.microsoft,
  //   link: "https://opensource.microsoft.com"
  // },
  {
    tier: "silver",
    name: "Postman",
    image: sponsors.postman,
    link: "https://postman.com"
  },
  {
    tier: "silver",
    name: "Cloud Native Computing Foundation",
    image: sponsors.cncf,
    link: "https://cncf.io"
  },
  // {
  //   tier: "silver",
  //   name: "Edge and node",
  //   image: sponsors.edgeandnode,
  //   link: "https://edgeandnode.com"
  // },
  {
    tier: "silver",
    name: "Fincra",
    image: sponsors.fincra,
    link: "https://fincra.com"
  },
  // {
  //   tier: "bronze",
  //   name: "OpenSuse",
  //   image: sponsors.opensuse,
  //   link: "https://opensuse.org"
  // },
  {
    tier: "bronze",
    name: "The @ Company",
    image: sponsors.atcompany,
    link: "https://atsign.dev"
  }
  // {
  //   tier: "bronze",
  //   name: "Paystack",
  //   image: sponsors.paystack,
  //   link: "https://paystack.com"
  // },
  // {
  //   tier: "bronze",
  //   name: "BeOpenIt",
  //   image: sponsors.beopenit,
  //   link: "https://www.beopenit.com"
  // }
];

function Sponsors() {
  return (
    <section className="border-top-bottom">
      <Slider />
      <div className="border-bottom"></div>
      <div id="sponsors" className="bg-white text-center lg:flex-row px-4 lg:px-40 pb-20 lg:pt-24 pt-12">
        <div className="flex flex-wrap justify-center">
          <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
            <h1 className="text-sec font-bold font-anisette lg:text-5xl">Sponsors</h1>
          </div>
        </div>

        <div className="my-12">
          {/* Headline Sponsors */}
          <p className="font-anisette text-h6 font-bold uppercase">Headline</p>
          <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
            {sponsorsData
              .filter((data) => data.tier.includes("headline"))
              .map((sponsor) => (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={sponsor.name}
                  className="relative lg:w-1/4 max-w-sm px-3 my-12"
                >
                  <figure className="w-full">
                    <img className="w-64 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                  </figure>
                </a>
              ))}
          </div>

          {/* Diamond sponsors */}
          <p className="font-anisette text-h6 font-bold uppercase">Diamond</p>
          <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
            {sponsorsData
              .filter((data) => data.tier.includes("diamond"))
              .map((sponsor) => (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={sponsor.name}
                  className="relative lg:w-1/4 max-w-sm px-3 my-12"
                >
                  <figure className="w-full">
                    <img className="w-64 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                  </figure>
                </a>
              ))}
          </div>

          {/* Gold sponsors */}
          <p className="font-anisette text-h6 font-bold uppercase">Gold</p>
          <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
            {sponsorsData
              .filter((data) => data.tier.includes("gold"))
              .map((sponsor) => (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={sponsor.name}
                  className="relative lg:w-1/4 max-w-sm px-3 my-12"
                >
                  <figure className="w-full">
                    <img className="w-64 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                  </figure>
                </a>
              ))}
          </div>

          {/* Silver sponsors */}
          <p className="font-anisette text-h6 font-bold uppercase">Silver</p>
          <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
            {sponsorsData
              .filter((data) => data.tier.includes("silver"))
              .map((sponsor) => (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={sponsor.name}
                  className="relative lg:w-1/4 max-w-sm px-3 my-12"
                >
                  <figure className="w-full">
                    <img className="w-64 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                  </figure>
                </a>
              ))}
          </div>

          {/* Bronze sponsors */}
          <p className="font-anisette text-h6 font-bold uppercase">Bronze</p>
          <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
            {sponsorsData
              .filter((data) => data.tier.includes("bronze"))
              .map((sponsor) => (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={sponsor.name}
                  className="relative lg:w-1/4 max-w-sm px-3 my-12"
                >
                  <figure className="w-full">
                    <img className="w-64 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                  </figure>
                </a>
              ))}
          </div>
        </div>

        <div className="relative mt-20 text-center">
          <a href="/sponsorship-guide.pdf" className="font-anisette bg-orange-primary text-xs text-brown p-5 uppercase">
            Become a Sponsor
          </a>
        </div>
      </div>
      <div className="border-top"></div>
      <Slider />
    </section>
  );
}

export default Sponsors;
