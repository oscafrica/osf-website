import React from "react";

import { sponsors } from "../2023/cloudImages";

// TODO: import the right asset svg.
const sponsorsData = [
  {
    tier: "diamond",
    name: "Google",
    image: sponsors.google,
    link: "https://opensource.google"
  },
  // {
  //   tier: "bronze",
  //   name: "Cloud Native Computing Foundation",
  //   image: sponsors.cncf,
  //   link: "https://www.cncf.io/"
  // },
];

const headline = sponsorsData.filter((data) => data.tier.includes("headline"));
const diamond = sponsorsData.filter((data) => data.tier.includes("diamond"));
const gold = sponsorsData.filter((data) => data.tier.includes("gold"));
const silver = sponsorsData.filter((data) => data.tier.includes("silver"));
const bronze = sponsorsData.filter((data) => data.tier.includes("bronze"));

function SponsorLogo({sponsors}) {
  return (
    <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap justify-center">
      {sponsors
        // .filter((data) => data.tier.includes("headline"))
        .map((sponsor) => (
          <a
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            key={sponsor.name}
            className="relative lg:w-1/4 max-w-sm p-3 my-12 lg:mx-5 border border-white/10"
          >
            <figure className="w-full">
              <img className="w-40 h-40 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
            </figure>
          </a>
        ))}
    </div>
  )
}

function Sponsors() {
  return (
    <section id="sponsors" className="bg-[#1E1E1E]">
      <div className="container lg:flex-row mx-auto my-40 text-center text-white">
        <div className="flex flex-wrap justify-center">
          <div className="mb-8 lg:mb-12 w-full lg:w-1/2">
            <h1 className="font-humane font-medium text-[10rem] lg:text-[20rem] leading-none uppercase">Sponsors</h1>
          </div>
        </div>

        <div className="my-12">
          {
            [headline, diamond, gold, silver, bronze].map((tier) => (
              <>
                { tier[0] && <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">{tier[0]?.tier}</p>}
                <SponsorLogo sponsors={tier} />  
              </>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
