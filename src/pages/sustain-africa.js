import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import SustainHead from "../components/sustainHead";
import Footer from "../components/footer";

function SustainAfrica() {
  return (
    <Layout>
      <SEO
        keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]}
        title="Sustain Africa 2020"
      />
      <Nav />
      <SustainHead />
      <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">INTRODUCTION</h1>
            <p className="text-base my-4">
              Sustain Summit is a one-day conversation for Open Source Software Sustainers. We would be talking about
              Sustainability - the sustainability of resources and the sustainability of its people.
              <br />
              <br />
              The conversation around the comprehensive overview of how FOSS is developed, maintained, utilized, and
              providing a roadmap for solving the cultural, financial, and institutional issues among open source
              project maintainers continues to be the focus of Sustain. It will be expressing discussed at the
              #SustainAfrica summit at the Open Source Festival.
              <br />
              <br />
              At the Sustain Africa summit, there would be no keynotes, talks, or sponsor demos. Your undivided
              attention will be required. Phones and laptops will not be used throughout, and you will be asked to put
              devices away if they are a distraction to you or anyone else, as facilitators take you through the journey
              of Open Source Sustainability.
            </p>
            <iframe
              title="Sustain Summit 2018"
              className="mt-12"
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/LxanTEHo6BQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">GUIDELINES</h1>
            <p className="text-base my-4">
              The following are some general guidelines regarding how we will run the event:
            </p>
            <ol className="text-base my-4 list-none lg:list-decimal">
              <li className="my-4">
                <b>Full participation in the program is requested: </b>
                part-time participation will work against the overall event goals. In particular, we ask all
                participants to refrain from scheduling side meetings during stated agenda times. We ask that each
                participant utilize their seat at the meeting to the fullest for the benefit of all.
              </li>
              <li className="my-4">
                <b>This is a &quot;devices at ease&quot; event: </b>
                use of laptops and cellphones during sessions is strongly discouraged unless you are a designated
                note-taker. We encourage all participants to be fully present in sessions and discussions, rather than
                multi-tasking on email, etc. We invite participants to use the break to check in with external
                realities.
              </li>
              <li className="my-4">
                <b>Note: </b>
                will be dynamically captured during sessions, as we want to document and disseminate the learnings and
                outcomes from the event and create resources we can continue to build upon. We will be asking all
                participants to help with capture, so as to spread the work around evenly.
              </li>
            </ol>
            <p className="text-base my-4">
              Sessions are designed to be highly interactive. This won’t be a space where you will see any panels and
              keynote speakers. Breakout sessions will be designed to spur discussion and production. Facilitators will
              have as their primary goals enabling learning, addressing questions, and supporting peer sharing and peer
              production. Bring your ideas, your questions, your needs and your knowledge to share!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">SUSTAIN AGENDA</h1>
            <p className="text-base my-4">
              The following is a working schedule for the SustainAfrica 2020, taking place in Lagos, Nigeria on{" "}
              <b>20th February 2020</b> at{" "}
              <a
                className="underline"
                href="https://www.google.com/maps/dir/7.7860243,6.7386955/google+developer+space+in+lagos/@7.1884798,2.8066988,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103bf54c9624f8c7:0xb0a6fcfa510af77d!2m2!1d3.4447841!2d6.4502841"
              >
                Google Developer Space
              </a>
              . The event starts at 5:00 PM, so please arrive at 4:30 PM to check-in.
            </p>
            <p className="text-base my-4">
              The event will last for 2 hours 30 minutes and will be structured as collaborative working sessions, along
              with optional activities. Sessions will be dialog and outcome-oriented rather than presentations or
              lecture format. The program is envisioned to enable deeper collaborations and learnings across the network
              of participants in order to collectively improve our skills, strategies, and impact in our respective OSS
              efforts.
            </p>

            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Intro to CSS</td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">858</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">
                    A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design
                  </td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Intro to JavaScript</td>
                  <td className="border px-4 py-2">Chris</td>
                  <td className="border px-4 py-2">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export default SustainAfrica;
