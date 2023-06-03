import React from "react";

import SEO from "../../components/SEO/seo";
import Nav from "../../components/2023/nav";
import Layout from "../../components/layout";

import { homeBackground } from "../../components/2023/cloudImages";
import Footer from "../../components/2023/footer";

const SectionLayout = ({ children }) => <div className="mb-[56px] max-w-[795px] m-auto">{children}</div>;
const bgWrapperStyles = {
  backgroundImage: `url(${homeBackground.background})`,
  backgroundSize: "contain",
  height: "648px"
};

function SustainAfrica() {
  return (
    <Layout>
      <SEO title="Sustain Africa 2023" />
      <Nav />
      <section
        id="sustain"
        className="bg-[#1E1E1E] overflow-hidden mb-[114px] flex items-center justify-center"
        style={bgWrapperStyles}
      >
        <div className="font-humane mt-24 font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
          <h1 className="text-white text-[400px] font-[500] text-center lg:-mb-16">SUSTAIN AFRICA</h1>
        </div>
      </section>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-3xl lg:text-3xl"> introduction </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[40px] leading-8 text-base">
          Sustain Africa is a one-day conversation for Open Source Software Sustainers. We would be talking about
          Sustainability - the sustainability of resources and the sustainability of its people. The conversation around
          the comprehensive overview of how FOSS is developed, maintained, utilized, and providing a roadmap for solving
          the cultural, financial, and institutional issues among open source project maintainers continues to be the
          focus of Sustain.At the Sustain Africa summit, there would be no keynotes, talks, or sponsor demos. Your
          undivided attention will be required. Phones and laptops will not be used throughout, and you will be asked to
          put devices away if they are a distraction to you or anyone else, as facilitators take you through the journey
          of Open Source Sustainability.
        </p>
      </SectionLayout>

      <div className="w-full mb-[56px] h-[600px] max-w-[1200px] m-auto">
        <iframe
          title="Sustain Africa 2021"
          className="w-full"
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/voFbXUQC_8M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-3xl lg:text-3xl"> Goals </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[40px] leading-8 text-base">
          {" "}
          Our overall goals at Sustain Africa are to:{" "}
        </p>

        <ol className="mt-[30px] mx-4 list-decimal text-[#D1D1E3;]">
          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              Map and compare visions for the long-term health of free and open software communities around the globe.
              connecting those who are passionate about these topics and supporting deeper ongoing collaboration and
              shared practice.
            </p>
          </li>

          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              Frame and workshop concrete sustainability needs and challenges, applying and prototyping strategies and
              practices that provide ongoing support and leadership in sustainability practices.
            </p>
          </li>

          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              Document models, strategies, and approaches to sustainability of OSS projects, and work toward a more
              sustainable future for OSS.
            </p>
          </li>

          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              Address the “hard conversations” tied to sustainability, including appropriate practices for companies
              participating in free and open communities, and new developments in licensing and reuse.
            </p>
          </li>
        </ol>
      </SectionLayout>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-3xl lg:text-3xl"> Guidelines </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[40px] leading-8 text-base">
          The following are some general guidelines regarding how we will run the event:
        </p>

        <ol className="mt-[30px] list-decimal mx-4 text-[#D1D1E3;]">
          <li className=" text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              <b className="text-white">Full participation in the program is requested: </b>
              part-time participation will work against the overall event goals. In particular, we ask all participants
              to refrain from scheduling side meetings during stated agenda times. We ask that each participant utilize
              their seat at the meeting to the fullest for the benefit of all.
            </p>
          </li>

          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              <b className="text-white">This is a &quot;devices at ease&quot; event: </b>
              use of laptops and cellphones during sessions is strongly discouraged unless you are a designated
              note-taker. We encourage all participants to be fully present in sessions and discussions, rather than
              multi-tasking on email, etc. We invite participants to use the break to check in with external realities.
            </p>
          </li>

          <li className="text-base">
            <p className="text-lg pt-[5px] leading-8 ">
              <b className="text-white">Note: </b>
              will be dynamically captured during sessions, as we want to document and disseminate the learnings and
              outcomes from the event and create resources we can continue to build upon. We will be asking all
              participants to help with capture, so as to spread the work around evenly.
            </p>
          </li>
        </ol>

        <p className="text-[#D1D1E3;] text-lg pt-[40px] leading-8 text-base">
          Sessions are designed to be highly interactive. This won’t be a space where you will see any panels and
          keynote speakers. Breakout sessions will be designed to spur discussion and production. Facilitators will have
          as their primary goals enabling learning, addressing questions, and supporting peer sharing and peer
          production. Bring your ideas, your questions, your needs and your knowledge to share!
        </p>
      </SectionLayout>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-3xl lg:text-3xl"> Agenda </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[40px] leading-8 text-base">
          The event starts at 03:30 PM on <b className="text-white"> 16th June, 2023 </b>, so please arrive at 03:00 PM
          to check in. The event will last for 3 hours and will be structured as collaborative working sessions, along
          with optional activities. Sessions will be dialog and outcome-oriented rather than presentations or lecture
          format. The program is envisioned to enable deeper collaborations and learnings across the network of
          participants in order to collectively improve our skills, strategies, and impact in our respective OSS
          efforts.
          <br />
          <br />
          The following is a working schedule for the Sustain Africa 2022:
        </p>
      </SectionLayout>

      <Footer />
    </Layout>
  );
}

export default SustainAfrica;