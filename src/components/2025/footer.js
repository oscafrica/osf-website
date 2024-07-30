import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-svg-core/styles.css";

function Footer(props) {
  return (
    <footer className="flex w-screen bg-white">
      <div className=" bottom-0 z-40 w-full items-center justify-center">
        <div className="container flex lg:flex-row flex-col-reverse justify-between mx-auto text-lg items-center p-5">
          <text className="font-clashDisplay font-black p-4 md:mt-0 lg:mt-0">Open Source Festival &copy; 2025</text>
          <div className=" flex justify-between flex-col lg:flex-row">
            <div className="flex justify-center align-center text-center">
              <text className="font-clashDisplayVariable font-black p-2 m-2">Connect:</text>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <a
                href="https://oscafrica.org/discord"
                className="font-clashDisplay text-gray p-2 m-2"
              >
                Discord &nbsp;
              </a>
              <a href="https://linkedin.com/company/oscafrica/" className="font-clashDisplay text-gray p-2 m-2">
                LinkedIn &nbsp;
              </a>
              <a href="https://x.com/osca_hq" className="font-clashDisplay text-gray p-2 m-2">
                Twitter &nbsp;
              </a>
              <a href="https://instagram.com/oscafrica/" className="font-clashDisplay text-gray p-2 m-2">
                Instagram &nbsp;
              </a>
              <a
                href="https://youtube.com/@OpenSourceCommunityAfrica"
                className="font-clashDisplay text-gray p-2 m-2"
              >
                Youtube &nbsp;
              </a>
            </div>
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
