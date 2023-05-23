import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faFacebookSquare, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faEnvelope, faExternalLinkAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Gallery from "./gallery";

library.add(
  faEnvelope,
  faCalendar,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faGithub,
  faDiscord
);
config.autoAddCss = false;

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-5 md:px-0 lg:px-0 py-10 lg:py-20 mt-20 lg:mt-16">
        <div className="flex sm:flex-row flex-col z-15 justify-between text-sm mb-10 lg:mb-20 text-center md:text-left">
          <h3 className="font-humane font-black h-20 lg:h-full text-sship2 md:text-[15rem] lg:text-[25rem] md:mt-24 lg:mt-[155px] uppercase tracking-wide">
            Thank You<span className="text-[#F7931E]">.</span>
          </h3>
          <div className="lg:basis-1/4">
            <h1 className="font-clashDisplay font-black p-1 text-xl lg:text-3xl uppercase">❤️ from the osca team</h1>
            <div className="z-10 mt-8">
              {[
                {
                  route: "https://docs.oscafrica.org/about/community-code-of-conduct",
                  title: "Code of Conduct"
                },
                {
                  route: "https://www.flickr.com/photos/oscafrica/albums/with/72177720298698442",
                  title: "Gallery"
                },
                {
                  route: "https://oscafrica.org/community",
                  title: "Community"
                },
                {
                  route: "https://opencollective.com/osca",
                  title: "Open Collective"
                },
                {
                  route: "https://blog.oscafrica.org",
                  title: "Blog"
                }
              ].map((link) => (
                <ul className="m-0 p-0" key={link.title}>
                  <li className="lg:pr-8 pb-2">
                    <a className="font-clashDisplay no-underline text-black text-lg" href={link.route}>
                      {link.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="z-10 mt-8">
              {[
                {
                  key: 0,
                  label: "Email",
                  faIcon: ["fa", "envelope"],
                  href: "mailto:info@oscafrica.org"
                },
                {
                  key: 1,
                  label: "Twitter",
                  faIcon: ["fab", "twitter"],
                  href: "https://twitter.com/oscafrica"
                },
                {
                  key: 2,
                  label: "Facebook",
                  faIcon: ["fab", "facebook-square"],
                  href: "https://facebook.com/opensourcecommunityafrica"
                },
                {
                  key: 3,
                  label: "Instagram",
                  faIcon: ["fab", "instagram"],
                  href: "https://www.instagram.com/oscafrica"
                },
                {
                  key: 4,
                  label: "GitHub",
                  faIcon: ["fab", "github"],
                  href: "https://github.com/oscafrica"
                },
                {
                  key: 5,
                  label: "Discord",
                  faIcon: ["fab", "discord"],
                  href: "https://discord.gg/8STPZzN"
                }
              ].map((icon) => (
                <a
                  key={icon.key}
                  aria-label={icon.label}
                  className="p-2 no-underline text-black text-lg border mr-3"
                  href={icon.href}
                >
                  <i>
                    <FontAwesomeIcon icon={icon.faIcon} />
                  </i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Gallery />
      </div>
    </footer>
  );
}

export default Footer;
