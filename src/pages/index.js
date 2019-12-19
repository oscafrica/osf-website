import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Nav from "../components/nav";
import Header from "../components/header";
import Cta from "../components/cta";
import About from "../components/about";
import Speakers from "../components/speakers";
import Footer from "../components/footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faCalendar, faMapMarkerAlt, faTwitter, faFacebookSquare, faGithub, faLinkedin);

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]}
        title="Home"
      />
      <Nav />
      <Header />
      <Cta />
      <About />
      <Speakers />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
