import React from "react";
import SEO from "../components/SEO/seo";
import styled from "styled-components";
import { logo, sponsorship } from "../components/cloudImages";

function IndexPage() {
  return (
    <>
      <SEO
        keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]}
        title="OSCAfest 2021 Sponsorship"
      />
      <div className=" text-white">
        <img src={`${sponsorship.background}`} alt="background" className="z-10 object-cover w-screen h-screen" />
        <section className="flex flex-col z-30 absolute top-0 left-0 w-screen min-h-screen justify-center items-center">
          <img alt="Open Source Community Africa Logo." className="w-16" src={logo.pngOrange} />
          <h1 className="text-sship1 leading-none font-thin my-8 text-white">
            <span>The</span>
            &nbsp;
            <span className="font-medium">Future</span>
            &nbsp;
            <span>is</span>
            &nbsp;
            <div className="flex items-center">
              <span className="text-sship2 font-bold leading-none">Open</span>
              &nbsp;
              <img alt="Open Source Community Africa Logo." className="w-24 -mb-8" src={sponsorship.arrow} />
            </div>
          </h1>

          <time dateTime="2018-11-11" className="text-h1 font-medium">
            November 11 - 13, 2021
          </time>
          <p className="text-h4 font-light my-2">Lagos, Nigeria | Virtual</p>
          <p className="text-h4 font-light">#OSCAFest21</p>

          <div className="flex items-center my-10">
            <SponsorLink
              href="/"
              className="px-10 py-4 bg-orange-primary rounded-full uppercase text-black text-sm border-2 tracking-wide font-semibold"
            >
              join our sponsors
            </SponsorLink>
            <div className=" mx-3" />

            <button className="inline-flex items-center px-10">
              <img src={sponsorship.play} alt="play icon" className=" w-6 mr-1" />
              Watch video
            </button>
          </div>

          <a className=" p-4" href="/2020">
            View past events
          </a>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hZc44FApgl0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  );
}

const SponsorLink = styled.a`
  position: relative;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(266.77deg, #f5bc13 6.1%, rgba(245, 188, 19, 0) 89.16%), #f1f2d3;
    transform: translate(0.8rem, 0.8rem);

    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 100px;
  }
`;

export default IndexPage;
