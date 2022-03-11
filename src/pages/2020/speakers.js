import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2020/nav";
import Breadcrumb from "../../components/2020/breadcrumb";
import Sched from "../../components/schedEmbed";
import Footer from "../../components/2020/footer";

function Speakers() {
  return (
    <Layout>
      <SEO title="Speakers" />
      <Nav />
      <Breadcrumb name="Speakers" />
      <Sched type="speakers" slug="oscafest" />
      <Footer />
    </Layout>
  );
}

export default Speakers;
