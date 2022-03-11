import React from "react";
import Marquee from "react-fast-marquee";
import { patterns } from "./cloudImages";

const Slide = () => (
  <>
    <img src={patterns.twoSidedArrow} alt="" />
    <p className="text-base font-bold px-4">#OSCAFEST22</p>
    <img src={patterns.twoSidedArrow} alt="" />
  </>
);

function Slider() {
  return (
    <>
      <div className="border-top-bottom"></div>
      <Marquee className="m-4 marquee" speed={50} pauseOnHover>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Marquee>
      <div className="border-top-bottom"></div>
    </>
  );
}

export default Slider;
