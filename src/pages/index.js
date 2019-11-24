import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import nextBillionCreators from "../images/NXTBC.png";

function IndexPage() {
  const { site } = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  return (
    <Layout>
      <SEO
        keywords={[`Open Source Community Africa`, `Open Source Festival`, `OSCA`, `OSF`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt={site.siteMetadata.title}
          className="block mx-auto w-1/2"
          src={nextBillionCreators}
        />

      </section>
    </Layout>
  );
}

export default IndexPage;
