import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2025/nav";
import Header from "../components/2025/header";
import About from "../components/2025/about";
import Sponsors from "../components/2025/sponsors";
import Footer from "../components/2025/footer";

function IndexPage() {
  return (
    <Layout>
      <SEO title="2025" />
      <Nav />
      <Header />
      <About />
      {/* <Speakers /> */}
      <Sponsors />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
