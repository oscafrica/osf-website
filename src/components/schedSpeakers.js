import React from "react";
import PropTypes from "prop-types";
import useEmbedScript from "../hooks/useEmbedScript";

function SchedSpeakers(props) {
  return (
    <section className="lg:flex-row px-4 lg:px-40 pt-32 pb-24">
      <div>
        <a id="sched-embed" href="https://oscafest.sched.com/directory/speakers">
          View the Open Source Festival 2020 speakers directory.
        </a>
        {useEmbedScript(`${props.link}`)}
      </div>
    </section>
  );
}

SchedSpeakers.propTypes = {
  link: PropTypes.string.isRequired
};

export default SchedSpeakers;
