import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2024/nav";
import Header from "../components/2024/header";
import Footer from "../components/2024/footer";

function IndexPage() {
  return (
    <Layout>
      <SEO title="2024" />
      <Nav />
      <Header />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
