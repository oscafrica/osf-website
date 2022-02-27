import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2020/nav";
import Breadcrumb from "../../components/2020/breadcrumb";
import ScholarForm from "../../components/2020/scholarForm";
import Footer from "../../components/2020/footer";

function Scholarship() {
  return (
    <Layout>
      <SEO
        keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]}
        title="Scholarship Program"
      />
      <Nav />
      <Breadcrumb name="Scholarship Program" />
      <ScholarForm />
      <Footer />
    </Layout>
  );
}

export default Scholarship;
