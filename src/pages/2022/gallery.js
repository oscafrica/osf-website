import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2022/nav";
import Breadcrumb from "../../components/2022/breadcrumb";
import Gallery from "../../components/2022/gallery";
import Footer from "../../components/2022/footer";

function GalleryPage() {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Nav />
      <Breadcrumb name="Photo Gallery" />
      <Gallery />
      <Footer />
    </Layout>
  );
}

export default GalleryPage;
