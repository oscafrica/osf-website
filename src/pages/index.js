import React from "react";

import AboutPage from "./about";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `Open Source Community Africa`,
          `Open Source Festival`,
          `OSCA`,
          `OSF`
        ]}
        title="Home"
      />

      <AboutPage />
    </Layout>
  );
}

export default IndexPage;
