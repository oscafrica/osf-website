import React from "react";
import PropTypes from "prop-types";

function Breadcrumb(props) {
  return (
    <div>
      <section
        id={props.name}
        className="relative h-[300px] lg:h-[600px] overflow-hidden flex items-center justify-center"
      >
        <div className="font-humane lg:mt-24 font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
          <h1 className="text-white text-[128px] lg:text-[400px] font-[500] text-center lg:-mb-16">{props.name}</h1>
        </div>
        <span
          className="lg:block w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] z-5 absolute blur-[54px] right-[-170px] top-[-76.95px] lg:top-[-181.36px]"
          style={{
            background:
              "radial-gradient(34.85% 34.85% at 50% 50%, rgba(245, 185, 255, 0.5) 0%, rgba(121, 255, 191, 0.125) 50.52%, rgba(187, 251, 255, 0.02) 100%)"
          }}
        ></span>
        <span
          className="lg:block w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] z-10 absolute blur-[100px] left-[-252.98px] lg:left-[-48px] top-[100px] lg:top-[477px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 26, 0.41) 0%, rgba(255, 2, 230, 0.27) 50.52%, rgba(212, 0, 255, 0) 100%)"
          }}
        ></span>
      </section>
    </div>
  );
}

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired
};

export default Breadcrumb;
