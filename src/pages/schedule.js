import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2025/nav";
import Footer from "../components/2025/footer";

function SpeakerSchedulePage() {
  return (
    <Layout>
      <SEO title="Speaker Schedule" />
      <Nav />
      <iframe
        src="https://sessionize.com/view/iwyk9p10/GridSmart?format=Embed_Styled_Html&isDark=False&title=Open%20Source%20Festival%202025"
        width="100%"
        height="800"
        frameBorder="0"
        title="Open Source Festival 2025 Schedule"
        className="border-none -mt-[130px] lg:-mt-[90px]"
      ></iframe>
      <Footer />
    </Layout>
  );
}

export default SpeakerSchedulePage;
