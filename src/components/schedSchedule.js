import React from "react";
import PropTypes from "prop-types";
import useEmbedScript from "../hooks/useEmbedScript";

function SchedSchedule(props) {
  return (
    <section className="lg:flex-row px-4 lg:px-40 pt-32 pb-24">
      <div>
        <a id="sched-embed" href="https://oscafest.sched.com/">
          View the Open Source Festival 2020 schedule &amp; directory.
        </a>
        {useEmbedScript(`${props.link}`)}
      </div>
    </section>
  );
}

SchedSchedule.propTypes = {
  link: PropTypes.string.isRequired
};

export default SchedSchedule;
