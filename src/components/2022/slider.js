import React from "react";
import { patterns } from "./cloudImages";

function Slider() {
  return (
    <section className="marquee mt-3 mb-8">
      <hr />
      <div className="track flex">
        <img alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5"> #OSCAFEST22</h4>
        <img alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans hidden md:block mx-5"> #OSCAFEST22</h4>
        <img className="hidden md:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden md:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden md:block"> #OSCAFEST22</h4>
        <img className="hidden lg:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden 2xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden 2xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden 2xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden 2xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
        <h4 className="font-bold font-workSans mx-5 hidden lg:hidden 2xl:block"> #OSCAFEST22</h4>
        <img className="hidden lg:hidden 2xl:block" alt="Two sided arrow" src={patterns.twoSidedArrow} />
      </div>
      <hr />
    </section>
  );
}

export default Slider;
