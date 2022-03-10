import React from "react";
import { patterns } from "./cloudImages";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row items-center my-20 mx-4 lg:mx-32">
        <div className="z-10 hidden lg:block absolute left-0">
          <img className="-mt-24 -mb-12 -pl-4 w-3/4" src={patterns.circle} alt="" />
        </div>
        <figure className="z-20 w-full lg:w-1/2 mb-20 lg:mb-0 lg:ml-10">
          <img alt="A badge with text inscription: The Future is Open" src={patterns.futureIsOpen} />
        </figure>

        <div className="lg:w-1/2 lg:ml-4">
          <blockquote className="px-4 text-base text-justify tracking-tight text-army-green-primary">
            Open Source Community Africa is a community aimed at creating and supporting the open source movement within
            Africa. As a community, we intend to help integrate the act of open source contribution to African
            developers whilst strongly advocating the movement of free and open source software. <br />
            <br />
            Open Source Festival is a high profile event that would attract student delegates, developers, designers and
            corporate organizations on a large scale with series of talks, workshops, and awareness of open-sourced
            developer tools. The second edition is going to be a forum for networking, discussions and ideas proration
            around latest happenings in technology as well as the growth of open source in Africa. <br />
            <br />
            Through this festival, we intend to open the eyes of Africans so they can be aware that FUTURE IS OPEN.
          </blockquote>
        </div>
        <div className="hidden lg:block absolute right-0">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.africanMap} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
