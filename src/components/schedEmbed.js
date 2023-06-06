import React from "react";
import PropTypes from "prop-types";
import useEmbedScript from "../hooks/useEmbedScript";

function SchedEmbed(props) {
  return (
    <section className="lg:flex-row px-4 lg:px-40 pt-10 lg:pt-20 pb-10 lg:pb-20">
      <div className="relative">
        {props?.type ? (
          <a
            id="sched-embed"
            className="absolute inset-0 flex items-center justify-center text-2xl"
            href={`https://${props.slug}.sched.com/directory/speakers`}
          >
            Loading...
          </a>
        ) : (
          <a
            id="sched-embed"
            className="absolute inset-0 flex items-center justify-center text-2xl"
            href={`https://${props.slug}.sched.com`}
          >
            Loading...
          </a>
        )}
        {useEmbedScript(`https://${props.slug}.sched.com/js/embed.js`)}
      </div>
    </section>
  );
}

SchedEmbed.propTypes = {
  type: PropTypes.string,
  slug: PropTypes.string.isRequired
};

SchedEmbed.defaultProps = {
  type: null
};

export default SchedEmbed;
