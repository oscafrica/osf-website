import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2023/nav";
import Breadcrumb from "../../components/2023/breadcrumb";
import Sched from "../../components/schedEmbed";
import Footer from "../../components/2023/footer";

function Schedule() {
  return (
    <Layout>
      <SEO title="Schedule" />
      <Nav />
      <Breadcrumb name="Schedule" />
      <Sched slug="oscafest23" />
      <Footer />
    </Layout>
  );
}

export default Schedule;
