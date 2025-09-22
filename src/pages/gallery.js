import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/2025/nav";
import Breadcrumb from "../components/2023/breadcrumb";
import Gallery from "../components/2025/gallery";
import Footer from "../components/2025/footer";

function GalleryPage() {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Nav />
      <Breadcrumb name="Photo Gallery" />
      <Gallery />
      <Footer showGallery={false} />
    </Layout>
  );
}

export default GalleryPage;
