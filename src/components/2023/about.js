import React from "react";

import aboutus from './aboutus.jpg'; // TODO: move to cloudflare

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto my-20">
        <div className="lg:flex lg:flex-row lg:justify-between items-center mb-10">
          <h3 className="font-humane font-medium text-[10rem] lg:text-[20rem] lg:basis-1/4 lg:leading-[0.8] lg:ml-10 uppercase text-wrap lg:order-last">About Us</h3>
          <figure className="lg:grow">
            <img alt="Osca Fest 2022 conference at Tech Zone Park" src={aboutus} className="object-fit w-full h-full"/>
          </figure>
        </div>
        <div className="xl:w-1/2 2xl:w-1/4">
          <blockquote className="font-clashDisplay text-black text-justify tracking-tight text-xl">
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
      </div>
    </section>
  );
}

export default About;
