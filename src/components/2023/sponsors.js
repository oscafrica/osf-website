import React from "react";
import PropTypes from "prop-types";

import { sponsors, sponsorsColored } from "../2023/cloudImages";

const sponsorsData = [
  {
    tier: "diamond",
    name: "Google",
    image: sponsors.google,
    imageColored: sponsorsColored.google,
    link: "https://opensource.google/"
  },
  {
    tier: "bronze",
    name: "Cloud Native Computing Foundation",
    image: sponsors.cncf,
    imageColored: sponsorsColored.cncf,
    link: "https://www.cncf.io/"
  },
  {
    tier: "silver",
    name: "Paystack",
    image: sponsors.paystack,
    imageColored: sponsorsColored.paystack,
    link: "https://paystack.com/"
  },
  {
    tier: "silver",
    name: "Cannonical",
    image: sponsors.cannonical,
    imageColored: sponsorsColored.cannonical,
    link: "https://canonical.com/"
  },
  {
    tier: "silver",
    name: "Orbit.love",
    image: sponsors.orbit,
    imageColored: sponsorsColored.orbit,
    link: "https://orbit.love/"
  },
  {
    tier: "gold",
    name: "Microsoft",
    image: sponsors.microsoft,
    imageColored: sponsorsColored.microsoft,
    link: "http://microsoft.com/"
  },
  {
    tier: "bronze",
    name: "Block",
    image: sponsors.block,
    imageColored: "#", // remove grayscale
    link: "https://block.xyz/"
  },
  {
    tier: "silver",
    name: "PayDay",
    image: sponsors.payday,
    link: "https://www.usepayday.com/"
  },
  // TODO: add sponsor Joseph.
  {
    tier: "gold",
    name: "Open Source Collective",
    image: sponsors.osc,
    imageColored: sponsorsColored.osc,
    link: "https://oscollective.org/"
  },
  {
    tier: "silver",
    name: "Penpot",
    image: sponsors.penpot,
    link: "https://penpot.app/"
  },
  {
    tier: "silver",
    name: "University of Vermont",
    image: sponsors.uvm,
    imageColored: sponsorsColored.uvm,
    link: "https://www.uvm.edu/"
  },
  {
    tier: "silver",
    name: "Axelar",
    image: sponsors.axelar,
    link: "https://axelar.network/"
  },
  {
    tier: "bronze",
    name: "Polytope Lab",
    image: sponsors.polytope,
    link: "https://research.polytope.technology/"
  },
  {
    tier: "silver",
    name: "Gnome",
    image: sponsors.gnome,
    imageColored: sponsorsColored.gnome,
    link: "https://www.gnome.org/"
  },
  {
    tier: "bronze",
    name: "Kora Pay",
    image: sponsors.kora,
    imageColored: sponsorsColored.kora,
    link: "https://korahq.com/"
  },
  {
    tier: "bronze",
    name: "ALT School",
    image: sponsors.alt,
    link: "https://www.altschoolafrica.com/"
  }
  // {
  //   tier: "bronze",
  //   name: "Eden",
  //   image: sponsors.eden,
  //   imageColored: sponsorsColored.eden,
  //   link: "https://ouredenlife.com/"
  // }
];

const headline = sponsorsData.filter((data) => data.tier.includes("headline"));
const diamond = sponsorsData.filter((data) => data.tier.includes("diamond"));
const gold = sponsorsData.filter((data) => data.tier.includes("gold"));
const silver = sponsorsData.filter((data) => data.tier.includes("silver"));
const bronze = sponsorsData.filter((data) => data.tier.includes("bronze"));

function SponsorLogo({ sponsors }) {
  return (
    <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap gap-6 lg:gap-10 justify-center">
      {sponsors.map((sponsor) => (
        <a
          href={sponsor.link}
          target="_blank"
          rel="noopener noreferrer"
          key={sponsor.name}
          className="group relative basis-[46%] justify-self-center lg:w-1/4 max-w-sm p-3 border border-white/10"
          /* h-[177.5px] w-[186px] */
        >
          <figure key={sponsor.name} className={`${sponsor?.imageColored ? "w-full group-hover:hidden" : "w-full"}`}>
            <img key={sponsor.name} className={`${(sponsor.name === "Block" ? "w-40 h-40 mx-auto grayscale" : "w-40 h-40 mx-auto")}`} src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
          </figure>
          {sponsor?.imageColored && 
            <figure key={`${sponsor.name}-colored`} className="w-full hidden group-hover:block">
              <img key={`${sponsor.name}-colored`} className={`${(sponsor.name === "Cloud Native Computing Foundation" ? "w-[10.28rem] h-40 mx-auto" : "w-40 h-40 mx-auto")}`} src={`${sponsor.name === 'Block' ? sponsor.image : sponsor.imageColored}`} alt={`${sponsor.name}'s Colored Logo.`} />
            </figure>
          }
        </a>
      ))}
    </div>
  );
}

SponsorLogo.propTypes = {
  sponsors: PropTypes.array
};

SponsorLogo.defaultProps = {
  sponsors: null
};

function Sponsors() {
  return (
    <section id="sponsors" className="bg-[#020212]">
      <div className="container lg:flex-row mx-auto px-5 lg:px-0 my-20 lg:my-40 text-center text-white">
        <div className="flex flex-wrap justify-center">
          <div className="mb-8 lg:mb-12 w-full lg:w-1/2">
            <h1 className="font-humane font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
              Sponsors
            </h1>
          </div>
        </div>

        <div className="my-12">
          {[headline, diamond, gold, silver, bronze].map((tier) => (
            <>
              {tier[0] && (
                <p className="font-clashDisplay my-12 text-l lg:text-l tracking-widest font-bold uppercase">
                  {tier[0]?.tier}
                </p>
              )}
              <SponsorLogo sponsors={tier} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
