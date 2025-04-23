import React from "react";
import PropTypes from "prop-types";

import { sponsors, sponsorsColored } from "../2025/cloudImages";

const sponsorsData = [
  {
    tier: "gold",
    sponsors: [
      {
        name: "AWS",
        image: sponsors.amazon,
        imageColored: sponsors.amazon,
        link: "https://aws.amazon.com/"
      }
    ]
  },
  {
    tier: "silver",
    sponsors: [
      {
        name: "Eclipse Foundation",
        image: sponsors.eclipsefoundation,
        imageColored: sponsorsColored.eclipsefoundation,
        link: "https://www.eclipse.org/"
      }
    ]
  },
  {
    tier: "bronze",
    sponsors: [
      {
        name: "Google",
        image: sponsors.google,
        imageColored: sponsorsColored.google,
        link: "https://opensource.google/"
      },
      {
        name: "Cloud Native Computing Foundation",
        image: sponsors.cncf,
        imageColored: sponsorsColored.cncf,
        link: "https://www.cncf.io/"
      }
    ]
  }
];

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
        >
          <figure key={sponsor.name} className={`${sponsor?.imageColored ? "w-full group-hover:hidden" : "w-full"}`}>
            <img key={sponsor.name} className="w-40 h-40 mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
          </figure>
          {sponsor?.imageColored && (
            <figure key={`${sponsor.name}-colored`} className="w-full hidden group-hover:block">
              <img
                key={`${sponsor.name}-colored`}
                className="w-40 h-40 mx-auto"
                src={sponsor.imageColored}
                alt={`${sponsor.name}'s Colored Logo.`}
              />
            </figure>
          )}
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
          {sponsorsData.map((tier) => (
            <div key={tier.tier}>
              {tier.sponsors.length > 0 && (
                <>
                  <p className="font-clashDisplay my-12 text-l lg:text-l tracking-widest font-bold uppercase">
                    {tier.tier}
                  </p>
                  <SponsorLogo sponsors={tier.sponsors} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
