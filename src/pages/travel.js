import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Nav from "../components/nav";
import TravelHead from "../components/travelHead";
import Map from "../components/venueMap";
import Footer from "../components/footer";

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Travel" />
      <Nav />
      <TravelHead />
      <Map google="Zone Tech Park" />
      <Footer />
    </Layout>
  );
}

export default Schedule;
