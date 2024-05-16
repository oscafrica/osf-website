import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2025/nav";
import Header from "../components/2025/header";
import Footer from "../components/2025/footer";

function IndexPage() {
  return (
    <Layout>
      <SEO title="2025" />
      <Nav />
      <Header />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
