import React from "react";

import { sponsors } from "../2022/cloudImages";

// TODO: import the right asset svg.
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
  {
    tier: "silver",
    name: "Edge and node",
    image: sponsors.edgeandnode,
    link: "https://edgeandnode.com"
  },
  {
    tier: "silver",
    name: "Fincra",
    image: sponsors.fincra,
    link: "https://fincra.com"
  },
  {
    tier: "silver",
    name: "Paystack",
    image: sponsors.paystack,
    link: "https://paystack.com"
  },
  {
    tier: "bronze",
    name: "OpenSuse",
    image: sponsors.opensuse,
    link: "https://opensuse.org"
  },
  {
    tier: "bronze",
    name: "The @ Company",
    image: sponsors.atcompany,
    link: "https://atsign.dev"
  },
  {
    tier: "bronze",
    name: "BeOpenIt",
    image: sponsors.beopenit,
    link: "https://www.beopenit.com"
  }
];

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
            className="relative lg:w-1/4 max-w-sm p-3 my-12 lg:mx-5 border border-white/20"
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
          {/* Headline Sponsors */}
          <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">Headline</p>
          <SponsorLogo sponsors={sponsorsData.filter((data) => data.tier.includes("headline"))} /> 

          {/* Diamond sponsors */}
          <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">Diamond</p>
          <SponsorLogo sponsors={sponsorsData.filter((data) => data.tier.includes("diamond"))} />

          {/* Gold sponsors */}
          <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">Gold</p>
          <SponsorLogo sponsors={sponsorsData.filter((data) => data.tier.includes("gold"))} />

          {/* Silver sponsors */}
          <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">Silver</p>
          <SponsorLogo sponsors={sponsorsData.filter((data) => data.tier.includes("silver"))} />

          {/* Bronze sponsors */}
          <p className="font-clashDisplay text-l lg:text-l tracking-widest font-bold uppercase">Bronze</p>
          <SponsorLogo sponsors={sponsorsData.filter((data) => data.tier.includes("bronze"))} />
        
        </div>

      </div>
    </section>
  );
}

export default Sponsors;
