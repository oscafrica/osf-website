import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2025/nav";

// import { homeBackground } from "../../components/2023/cloudImages";
import Footer from "../components/2025/footer";
import Breadcrumb from "../components/2025/breadcrumb";

const SectionLayout = ({ children }) => (
  <div className="mb-[56px] px-[24px] lg:px-0 font-helvetica max-w-[795px] m-auto">{children}</div>
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
      <SEO title="Sustain Africa 2025" />
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
      <span className="pt-10" />
      <SectionLayout>
        <p className="text-[#D1D1E3;] text-lg pt-[24px] lg:pt-[40px]  leading-8 text-base">
          Sustain Summit is a one-day conversation for Open Source Software Sustainers. We would be talking about
          Sustainability -{" "}
          <a href="https://blog.oscafrica.org/series/sustain-africa-reports">
            the sustainability of resources and the sustainability of its people
          </a>
          . The conversation around the comprehensive overview of how FOSS is developed, maintained, utilized, and
          providing a roadmap for solving the cultural, financial, and institutional issues among open source project
          maintainers continues to be the focus of Sustain. At the Sustain Africa summit, there would be no keynotes,
          talks, or sponsor demos. Your undivided attention will be required. Phones and laptops will not be used
          throughout, and you will be asked to put devices away if they distract you or anyone else as facilitators take
          you through the journey of Open Source Sustainability. <br />
          <br />
          The following is a working Schedule for Sustain Africa 2025:
        </p>
      </SectionLayout>

      <div className="text-white text-base mt-12 mb-16 lg:mb-[140px]">
        <div className="w-full border my-[37px]" />

        <div className="hidden lg:inline text-orange-primary">
          <AgendaSection>
            <p className="w-full lg:w-[250px] uppercase font-clashDisplay">Time (WAT)</p>
            <p className="uppercase font-clashDisplay">Agenda</p>
          </AgendaSection>
        </div>

        <div className="w-full border my-[37px]" />

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">11:00 AM</p>
          <p className="w-full text-2xl lg:text-3xl">Arrivals and Registration</p>
        </GradientSectionHeader>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">12:00 PM</div>
          <div>
            <p className="text-2xl mt-2 lg:mt-0 lg:text-3xl">Opening Plenary</p>
            <p className="my-4 text-[#D1D1E3;]">
              The event will be called to order with a friendly and fast-paced kickoff that includes welcome words from
              the meeting organizers, brief participant introductions, overviews of the agenda, participation
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
              around open source and sustainability in the African context.
            </p>
            <p className="my-2 text-[#D1D1E3;]">Topics anticipated to be covered include:</p>
            <ul className="list-disc m-2 text-[#D1D1E3;]">
              <li className="mx-4">Open Source Software</li>
              <li className="mx-4">Open Source Hardware</li>
              <li className="mx-4">Open Source Design</li>
              <li className="mx-4">Open Source Documentation</li>
              <li className="mx-4">Open Source Data and AI</li>
              <li className="mx-4">Open Source Marketing and Funding</li>
              <li className="mx-4">Open Source Programs and Program Office</li>
              <li className="mx-4">Open Source and Government</li>
              <li className="mx-4">Burnout and Mental Health</li>
            </ul>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">02:00 PM</p>
          <div className="w-full">
            <p className="text-2xl lg:text-3xl">Recess and Lunch Break</p>
            <p className="my-4 text-[#D1D1E3;]">Chill and grab a food/drink!</p>
          </div>
        </GradientSectionHeader>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">02:40 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Strategy Sessions Share-Out</p>
            <p className="my-4 text-[#D1D1E3;]">
              Outputs and results from the interactive case studies will be set up around the main meeting room and
              summarised by the facilitators. Participants will be invited to &quot;browse the gallery,&quot; reviewing
              work from all sessions, providing feedback, and indicating interest in any ongoing efforts.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">03:20 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Mapping ongoing collaborations: Where from here?</p>
            <p className="my-4 text-[#D1D1E3;]">
              The entire group will pause before the closing plenary, and the moderator will take stock of the progress
              made to this point in the meeting, inventory action items, next steps, and other bridges to post-event
              collaboration.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <AgendaSection>
          <div className="min-w-[250px]">03:30 PM</div>
          <div>
            <p className="text-2xl  mt-2 lg:mt-0 lg:text-3xl">Closing Session</p>
            <p className="my-4 text-[#D1D1E3;]">
              Participants will summarise key outcomes from the event, share appreciation, and bring the meeting to a
              close.
            </p>
          </div>
        </AgendaSection>

        <div className="w-full border my-[37px]" />

        <GradientSectionHeader>
          <p className="min-w-full lg:min-w-[250px]">03:45 PM</p>
          <p className="w-full text-2xl lg:text-3xl">Photographs, Networking, and Lights out!</p>
        </GradientSectionHeader>
      </div>

      <div className="w-full mb-[56px] px-[24px] lg:px-1 h-[233px] lg:h-[600px] max-w-[90%] m-auto">
        <iframe
          title="Sustain Africa 2021"
          className="w-full"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/voFbXUQC_8M"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </Layout>
  );
}

export default SustainAfrica;
