import React from "react";
import Marquee from "react-fast-marquee";
import { patterns } from "./cloudImages";

function Slider() {
  return (
    <>
      <div className="border-top-bottom"></div>
      <Marquee className="mt-3 marquee">
        <img className="mb-3" src={patterns.scrollingPattern} alt="scrolling text" />
      </Marquee>
      <div className="border-top-bottom"></div>
    </>
  );
}

export default Slider;
