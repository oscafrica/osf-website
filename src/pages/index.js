import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Home from "../components/2023/home";

function IndexPage() {
  return (
    <Layout>
      <SEO title="2023" />
      <Home />
    </Layout>
  );
}

export default IndexPage;
