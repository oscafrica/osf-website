import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2020/nav";
import Header from "../../components/2020/header";
import Cta from "../../components/2020/cta";
import About from "../../components/2020/about";
import Speakers from "../../components/2020/speakers";
import Sponsors from "../../components/2020/sponsors";
import Gallery from "../../components/2020/gallery";
import Footer from "../../components/2020/footer";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "OSCAFRICA", "Open Source Festival", "OSF", "Open Source Festival 2020"]} title="2020" />
      <Nav />
      <Header />
      <Cta />
      <About />
      <Speakers />
      <Sponsors />
      <Gallery />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
