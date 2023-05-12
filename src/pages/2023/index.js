import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";
import Nav from "../../components/2023/nav";
import Header from "../../components/2023/header";

function IndexPage() {
  return (
    <Layout>
      <SEO title="2023" />
      <Nav />
      <Header />
    </Layout>
  );
}

export default IndexPage;
