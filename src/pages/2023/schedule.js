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
      <div className="pt-10 bg-white border-b-2">
        <Sched slug="oscafest23" />
      </div>
      <Footer />
    </Layout>
  );
}

export default Schedule;
