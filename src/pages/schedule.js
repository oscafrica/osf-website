import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Nav from "../components/nav";
import SchedHead from "../components/schedHead"
import Sched from "../components/sched";
import Footer from "../components/footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faCalendar, faMapMarkerAlt, faTwitter, faFacebookSquare, faGithub);

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Schedule" />
      <Nav />
      <SchedHead />
      <Sched />
      <Footer />
    </Layout>
  );
}

export default Schedule;
