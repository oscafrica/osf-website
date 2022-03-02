import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2020/nav";
import Breadcrumb from "../../components/2020/breadcrumb";
import Sched from "../../components/schedEmbed";
import Footer from "../../components/2020/footer";

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Schedule" />
      <Nav />
      <Breadcrumb name="Event Schedule" />
      <Sched slug="oscafest" />
      <Footer />
    </Layout>
  );
}

export default Schedule;
