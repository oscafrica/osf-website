import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2020/nav";
import Breadcrumb from "../../components/2020/breadcrumb";
import Footer from "../../components/2020/footer";

function Scholarship() {
  return (
    <Layout>
      <SEO title="Scholarship Program"/>
      <Nav />
      <Breadcrumb name="Scholarship Program" />
      <section className="lg:flex-row px-4 py-32 lg:px-40 lg:pt-32 lg:pb-0">
        <div className="text-center">
          <iframe
            title="Schorlarship Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSda5wGLHLOeHu13vGc6oYLyUbF0vtIgjJJkveNcdBnidJGVFA/viewform?embedded=true"
            width="1000"
            height="520"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export default Scholarship;
