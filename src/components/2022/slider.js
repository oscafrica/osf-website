import React from "react";
import Marquee from "react-fast-marquee";
import { patterns } from "./cloudImages";

const Slide = () => (
  <>
    <img src={patterns.twoSidedArrow} alt="" />
    <p className="text-base font-workSans font-bold px-4">#OSCAFEST22</p>
    <img src={patterns.twoSidedArrow} alt="" />
  </>
);

function Slider() {
  return (
    <div className="z-20">
      <div className="border-top-bottom"></div>
      <Marquee className="m-4" speed={50} pauseOnHover>
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
    </div>
  );
}

export default Slider;
