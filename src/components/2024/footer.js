import React from "react";
import PropTypes from "prop-types";
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

function Footer(props) {
  return (
    <footer className="w-screen bg-white">
      <div className=" bottom-0 z-40 w-full items-center justify-center">
            <div className="container flex flex-row justify-between mx-auto text-lg items-center justify-center p-5">
              <text className="font-clashDisplay font-extrabold">Oscafest@2025</text>
              <div className=" flex justify-between">
                <text className="font-clashDisplay font-extrabold p-2 m-2">Connect:</text>
                <a
                  href="https://www.linkedin.com/company/oscafrica/"
                  className="font-clashDisplay text-gray p-2 m-2"
                >
                  LinkedIn &nbsp;
                </a>
                <a
                  href="https://twitter.com/oscafest"
                  className="font-clashDisplay text-gray p-2 m-2"
                >
                  Twitter &nbsp;
                </a>
                <a
                  href="https://www.instagram.com/oscafrica/"
                  className="font-clashDisplay text-gray p-2 m-2"
                >
                  Instagram &nbsp;
                </a>
                <a
                  href="https://www.youtube.com/@OpenSourceCommunityAfrica"
                  className="font-clashDisplay text-gray p-2 m-2"
                >
                  Youtube &nbsp;
                </a>
              </div>
            </div>
          </div>
    </footer>
  );
}

Footer.propTypes = {
  showGallery: PropTypes.bool
};

Footer.defaultProps = {
  showGallery: true
};

export default Footer;
