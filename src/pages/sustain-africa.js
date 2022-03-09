import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/2022/nav";
import Breadcrumb from "../components/2022/breadcrumb";
import Footer from "../components/2022/footer";

function SustainAfrica() {
  return (
    <Layout>
      <SEO title="Sustain Africa 2022"/>
      <Nav />
      <Breadcrumb name="Sustain Africa" />
      <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">INTRODUCTION</h1>
            <p className="text-base my-4">
              Sustain Africa is a one-day conversation for Open Source Software Sustainers. We would be talking about
              Sustainability - the sustainability of resources and the sustainability of its people.
              <br />
              <br />
              The conversation around the comprehensive overview of how FOSS is developed, maintained, utilized, and
              providing a roadmap for solving the cultural, financial, and institutional issues among open source
              project maintainers continues to be the focus of Sustain.
              <br />
              <br />
              At the Sustain Africa summit, there would be no keynotes, talks, or sponsor demos. Your undivided
              attention will be required. Phones and laptops will not be used throughout, and you will be asked to put
              devices away if they are a distraction to you or anyone else, as facilitators take you through the journey
              of Open Source Sustainability.
            </p>
            <iframe
              title="Sustain Africa 2021"
              className="mt-12 w-full"
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/voFbXUQC_8M"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">GOALS</h1>
            <p className="text-base my-4">Our overall goals at Sustain Africa are to:</p>
            <ol className="text-base my-4 list-none lg:list-decimal">
              <li className="m-4">
                Map and compare visions for the long-term health of free and open software communities around the globe.
                connecting those who are passionate about these topics and supporting deeper ongoing collaboration and
                shared practice.
              </li>
              <li className="m-4">
                Frame and workshop concrete sustainability needs and challenges, applying and prototyping strategies and
                practices that provide ongoing support and leadership in sustainability practices.
              </li>
              <li className="m-4">
                Document models, strategies, and approaches to sustainability of OSS projects, and work toward a more
                sustainable future for OSS.
              </li>
              <li className="m-4">
                Address the “hard conversations” tied to sustainability, including appropriate practices for companies
                participating in free and open communities, and new developments in licensing and reuse.
              </li>
            </ol>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">GUIDELINES</h1>
            <p className="text-base my-4">
              The following are some general guidelines regarding how we will run the event:
            </p>
            <ol className="text-base my-4 list-none lg:list-decimal">
              <li className="m-4">
                <b>Full participation in the program is requested: </b>
                part-time participation will work against the overall event goals. In particular, we ask all
                participants to refrain from scheduling side meetings during stated agenda times. We ask that each
                participant utilize their seat at the meeting to the fullest for the benefit of all.
              </li>
              <li className="m-4">
                <b>This is a &quot;devices at ease&quot; event: </b>
                use of laptops and cellphones during sessions is strongly discouraged unless you are a designated
                note-taker. We encourage all participants to be fully present in sessions and discussions, rather than
                multi-tasking on email, etc. We invite participants to use the break to check in with external
                realities.
              </li>
              <li className="m-4">
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
            <h1 className="text-spo font-bold font-ubuntu">AGENDA</h1>
            <p className="text-base my-4">
              The event starts at 03:30 PM on <b>24th March 2022</b>, so please arrive at 03:00 PM to check in. The
              event will last for 3 hours and will be structured as collaborative working sessions, along with optional
              activities. Sessions will be dialog and outcome-oriented rather than presentations or lecture format. The
              program is envisioned to enable deeper collaborations and learnings across the network of participants in
              order to collectively improve our skills, strategies, and impact in our respective OSS efforts.
            </p>
            <p>The following is a working schedule for the Sustain Africa 2022:</p>
            <table className="table-fixed mt-12">
              <thead>
                <tr>
                  <th className="w-1/3 border p-4 text-xl">Time</th>
                  <th className="w-1/1 border p-4 text-xl">Agenda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4">03:00 PM</td>
                  <td className="border p-4">
                    <b>Arrivals and registration</b>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border p-4">03:30 PM - 03:50 PM</td>
                  <td className="border p-4">
                    <b>Opening Plenary</b>
                    <p className="my-4">
                      The event will be called to order with a friendly and fast-paced kickoff that includes words of
                      welcome from meeting organizers, brief participant introductions, overviews of the agenda,
                      participation guidelines, and meeting logistics.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">03:50 PM - 04:50 PM</td>
                  <td className="border p-4">
                    <b>Lenses on Sustainability - Interactive Case Studies</b>
                    <p className="my-4">
                      The program will start with a set of discussions designed to explore the latest practices and
                      learnings around sustainability in OSS contexts.
                    </p>
                    <p className="my-2">Topics anticipated to be covered include:</p>
                    <ul className="list-disc m-2">
                      <li className="mx-4">Open Source Documentation</li>
                      <li className="mx-4">Open Source Design</li>
                      <li className="mx-4">Open Source Data Science</li>
                      <li className="mx-4">Open Source Marketing and Funding</li>
                      <li className="mx-4">OSS Programs and Specialized Projects</li>
                      <li className="mx-4">Burnout and Mental Health</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">04:50 PM - 05:20 PM</td>
                  <td className="border p-4">
                    <b>Chill and grab a food/drink!</b>
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">05:20 PM - 05:45 PM</td>
                  <td className="border p-4">
                    <b>Strategy Sessions Share-Out</b>
                    <p className="my-4">
                      Outputs and results from the interactive case studies will be set up around the main meeting room,
                      and participants will be invited to “browse the gallery”, reviewing work from all sessions,
                      providing feedback, and indicating interest in any ongoing efforts.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">05:30 PM - 05:45 PM</td>
                  <td className="border p-4">
                    <b>Mapping ongoing collaborations: Where from here</b>
                    <p className="my-4">
                      The group will pause before the closing plenary to take stock of the progress made to this point
                      in the meeting and to inventory action items, next steps, and other bridges to post-event
                      collaboration.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">05:45 PM - 05:50 PM</td>
                  <td className="border px-4 py-2">
                    <b>Closing Session</b>
                    <p className="my-4">
                      Participants will summarize key outcomes from the event, share appreciations and bring the meeting
                      to a close.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">05:50 PM - 06:00 PM</td>
                  <td className="border px-4 py-2">
                    <b>Photographs and Networking</b>
                  </td>
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
