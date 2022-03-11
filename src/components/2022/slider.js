import React from "react";
import { patterns } from "./cloudImages";
import Marquee from "react-fast-marquee";

function Slider() {
  return (
    <Marquee className="mt-3 marquee">
      <img className="mb-3" src={patterns.scrollingPattern} alt="scrolling text"/>
    </Marquee>
  );
}

export default Slider;
