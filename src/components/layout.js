import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <section className="m-0 p-0">
      {children}
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
