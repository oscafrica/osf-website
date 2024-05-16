import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-US" }} />
      <section className="flex flex-col min-h-screen">{children}</section>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
