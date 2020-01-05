import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Nav from "../components/nav";
import TravelHead from "../components/travelHead";
import Hotels from "../components/hotels";
import Restaurants from "../components/restaurants";
import Footer from "../components/footer";

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Travel Guide" />
      <Nav />
      <TravelHead />
      <Hotels />
      <Restaurants />
      <Footer />
    </Layout>
  );
}

export default Schedule;
