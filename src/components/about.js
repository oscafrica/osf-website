import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { patterns } from "../components/cloudImages";

function About() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <section id="about" className="flex flex-col md:flex-row items-center my-16">
      <figure className="w-full md:w-1/3">
        <img
          className="p-12"
          alt={site.siteMetadata.title}
          src={patterns.nextBillion}
        />
      </figure>

      <div className="md:w-1/2 md:mx-12">
        <blockquote className="px-4 text-justify text-dark-blue-500">
          Open Source Community Africa is a community aimed at creating and
          supporting the open source movement within Africa. As a community, we
          intend to help integrate the act of open source contribution to
          African developers whilst strongly advocating the movement of free and
          open source software. <br />
          <br />
          Open Source Festival is a high profile event that would attract
          student delegates, developers, designers and corporate organizations
          on a large scale with series of talks, workshops, and awareness of
          open-sourced developer tools. The maiden edition is going to be a
          forum for networking, discussions and ideas proration around latest
          happenings in technology as well as the growth of open source in
          Africa. <br />
          <br />
          Through this festival, we intend to move Africans from just the
          billion users to the NEXT BILLION CREATORS.
        </blockquote>
      </div>
      <div className="hidden md:block absolute right-0 fixed">
        <img
          className="-mt-24 -mb-12 -pl-4"
          src={patterns.africanMap}
          alt="An Africa Pattern Design"
        />
      </div>
    </section>
  );
}

export default About;
