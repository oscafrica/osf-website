import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import nextBillionCreators from "../images/NXTBC.png";

function AboutPage() {
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
    <div>

      <section className="flex flex-col md:flex-row items-center">

        <figure className="w-2/3 md:w-1/3">
          <img
            alt={site.siteMetadata.title}
            src={nextBillionCreators}
          />
        </figure>

        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
          Open Source Community Africa is a community aimed at creating and supporting the open source movement within Africa.
          As a community, we intend to help integrate the act of open source contribution to African developers whilst strongly advocating
          the movement of free and open source software. <br /><br />

          Open Source Festival is a high profile event that would attract student delegates, developers, designers and corporate organizations
          on a large scale with series of talks, workshops, and awareness of open-sourced developer tools.
          The maiden edition is going to be a forum for networking, discussions and ideas proration around
          latest happenings in technology as well as the growth of open source in Africa. <br /><br />

          Through this festival, we intend to move Africans from just the billion users to the NEXT BILLION CREATORS.
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
