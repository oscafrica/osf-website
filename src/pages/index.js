import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/2022/nav";
import Header from "../components/2022/header";
import Cta from "../components/2022/cta";
import About from "../components/2022/about";
import Speakers from "../components/2022/speakers";
import Sponsors from "../components/2022/sponsors";
import Gallery from "../components/2022/gallery";
import Footer from "../components/2022/footer";

function IndexPage() {
return (
    <Layout>
    <SEO keywords={["Open Source Community Africa", "OSCA", "OSCAFRICA", "Open Source Festival", "OSF", "Open Source Festival 2022"]} title="2022" />
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
