import PropTypes from "prop-types";
import React from "react";

import Nav from "./nav";
import Header from "./header";
import Cta from "./cta";
import About from "./about";
import Footer from "./footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faCalendar, faMapMarkerAlt, faTwitter, faFacebookSquare, faGithub);

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Nav />
      <Header />
      <Cta />
      <About />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
