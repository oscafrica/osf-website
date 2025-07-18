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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <iframe
              src="https://sessionize.com/view/iwyk9p10/GridSmart?format=Embed_Styled_Html&isDark=False&title=Open%20Source%20Festival%202025"
              width="100%"
              height="800"
              frameBorder="0"
              title="Open Source Festival 2025 Schedule"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default SpeakerSchedulePage;
