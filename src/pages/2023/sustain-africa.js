import React from "react";

import SEO from "../../components/SEO/seo";
import Nav from "../../components/2023/nav";
import Layout from "../../components/layout";

// import { homeBackground } from "../../components/2023/cloudImages";
import Footer from "../../components/2023/footer";
import Breadcrumb from "../../components/2023/breadcrumb";

const SectionLayout = ({ children }) => (
  <div className="mb-[56px] px-[24px] lg:px-0 font-helvetica  max-w-[795px] m-auto">{children}</div>
);

const GradientSectionHeader = ({ children }) => (
  <div className="px-6 lg:px-0 mb-[37px] bg-gradient-to-r from-[#A66212] via-[#935136] to-[#600A6F]">
    <div className="max-w-[795px] m-auto pt-8 lg:pt-0 flex flex-col items-center lg:flex-row h-[120px] lg:h-[104px]">
      {children}
    </div>
  </div>
);

const AgendaSection = ({ children }) => (
  <div className="max-w-[795px] mb-[21px] px-6 lg:px-0 flex flex-col lg:flex-row m-auto">{children}</div>
);

// const bgWrapperStyles = {
//   backgroundImage: `url(${homeBackground.background})`,
//   backgroundSize: "contain",
//   objectPosition: "bottom"
// };

function SustainAfrica() {
  return (
    <Layout>
      <SEO title="Sustain Africa 2023" />
      <Nav />
      <Breadcrumb name="Sustain Africa" />
      {/* <section
        id="sustain"
        className="bg-[#1E1E1E] h-[384px] lg:h-[648px] overflow-hidden mb-[80px] lg:pt-[114px] flex items-center justify-center"
        style={bgWrapperStyles}
      >
        <div className="font-humane mt-24 font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
          <h1 className="text-white text-[128px] lg:text-[400px] font-[500] text-center lg:-mb-16">SUSTAIN AFRICA</h1>
        </div>
      </section> */}

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-2xl lg:text-3xl"> introduction </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px]  leading-8 text-base">
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

      <div className="w-full mb-[56px] px-[24px] lg:px-1 h-[233px] lg:h-[600px] max-w-[1200px] m-auto">
        <iframe
          title="Sustain Africa 2021"
          className="w-full"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/voFbXUQC_8M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-2xl lg:text-3xl"> Goals </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px] leading-8 text-base">
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
        <h3 className="text-white uppercase font-clashDisplay font-bold text-2xl lg:text-3xl"> Guidelines </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px]  leading-8 text-base">
          The following are some general guidelines regarding how we will run the event:
        </p>

        <ol className="mt-[20px] lg:mt-[30px] list-decimal mx-4 text-[#D1D1E3;]">
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

        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px] leading-8 text-base">
          Sessions are designed to be highly interactive. This won’t be a space where you will see any panels and
          keynote speakers. Breakout sessions will be designed to spur discussion and production. Facilitators will have
          as their primary goals enabling learning, addressing questions, and supporting peer sharing and peer
          production. Bring your ideas, your questions, your needs and your knowledge to share!
        </p>
      </SectionLayout>

      <SectionLayout>
        <h3 className="text-white uppercase font-clashDisplay font-bold text-2xl lg:text-3xl"> Agenda </h3>
        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px] leading-8 text-base">
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

      <div className="text-white text-base mt-12 mb-16 lg:mb-[140px]">
        <div className="hidden lg:inline">
          <AgendaSection>
            <p className="w-full lg:w-[250px] uppercase font-clashDisplay">Time (WAT)</p>
            <p className="uppercase font-clashDisplay">Agenda</p>
          </AgendaSection>
        </div>

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">11:00 AM</p>
          <p className="w-full text-2xl lg:text-3xl">Arrivals and registration</p>
        </GradientSectionHeader>

        <AgendaSection>
          <div className="min-w-[250px]">12 PM</div>
          <div>
            <p className="text-2xl mt-2 lg:mt-0 lg:text-3xl">Opening Plenary</p>
            <p className="my-4 text-[#D1D1E3;]">
              The event will be called to order with a friendly and fast-paced kickoff that includes words of welcome
              from meeting organizers, brief participant introductions, overviews of the agenda, participation
              guidelines, and meeting logistics.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">12:30 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Lenses on Sustainability - Interactive Case Studies</p>
            <p className="my-4 text-[#D1D1E3;]">
              The program will start with a set of discussions designed to explore the latest practices and learnings
              around sustainability in OSS contexts.
            </p>
            <p className="my-2 text-[#D1D1E3;]">Topics anticipated to be covered include:</p>
            <ul className="list-disc m-2 text-[#D1D1E3;]">
              <li className="mx-4">Open Source Documentation</li>
              <li className="mx-4">Open Source Design</li>
              <li className="mx-4">Open Source Data Science</li>
              <li className="mx-4">Open Source Marketing and Funding</li>
              <li className="mx-4">OSS Programs and Specialized Projects</li>
              <li className="mx-4">Burnout and Mental Health</li>
            </ul>
          </div>
        </AgendaSection>

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">01:40 PM - 05:20 PM</p>
          <p className="w-full text-2xl lg:text-3xl">Recess and Launch Break</p>
          <p className="my-4 text-[#D1D1E3;]">Chill and grab a food/drink!</p>
        </GradientSectionHeader>

        <AgendaSection>
          <div className="min-w-[250px]">02:30 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Strategy Sessions Share-Out</p>
            <p className="my-4 text-[#D1D1E3;]">
              Outputs and results from the interactive case studies will be set up around the main meeting room, and
              participants will be invited to “browse the gallery”, reviewing work from all sessions, providing
              feedback, and indicating interest in any ongoing efforts.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">02:40 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Mapping ongoing collaborations: Where from here?</p>
            <p className="my-4 text-[#D1D1E3;]">
              The group will pause before the closing plenary to take stock of the progress made to this point in the
              meeting and to inventory action items, next steps, and other bridges to post-event collaboration.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <td className="min-w-[250px]">03:00 PM</td>
          <td>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Closing Session</p>
            <p className="my-4 text-[#D1D1E3;]">
              Participants will summarize key outcomes from the event, share appreciations and bring the meeting to a
              close.
            </p>
          </td>
        </AgendaSection>

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">03:10 PM</p>
          <p className="w-full text-2xl lg:text-3xl">Photographs and Networking</p>
        </GradientSectionHeader>

        <AgendaSection>
          <td className="min-w-[250px]">03:30 PM</td>
          <td>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Lights Out!</p>
          </td>
        </AgendaSection>
      </div>
      <Footer />
    </Layout>
  );
}

export default SustainAfrica;
