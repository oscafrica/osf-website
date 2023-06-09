import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/SEO/seo";

import Nav from "../../components/2023/nav";
import Footer from "../../components/2023/footer";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { homeBackground } from "../../components/2023/cloudImages";
import {
  faCalendar,
  faAngleDown,
  faEnvelope,
  faExternalLinkAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bgWrapperStyles = {
  backgroundImage: `url(${homeBackground.background})`,
  backgroundSize: "contain",
  objectPosition: "bottom"
};

library.add(faEnvelope, faCalendar, faAngleDown, faMapMarkerAlt, faExternalLinkAlt);
config.autoAddCss = false;

const data = [
  {
    question: "What are the benefits of attending the conference?",
    answer: (
      <div className="text-[#D1D1E3;] text-base mb-10">
        <p>
          The Open Source Festival is a prestigious yearly conference that garners a significant turnout of students,
          developers, designers, and corporate entities. It encompasses an array of talks, workshops, and initiatives
          aimed at promoting the growth of open-source culture, contribution, development, community, etc., across the
          continent.
          <br />
          <br />
          This year, the festival is being organized as a hybrid event, incorporating opportunities for networking,
          discussions, and brainstorming on existing and emerging technologies and open source. Attending the festival
          offers several benefits and perks, such as:
          <br />
          <br />
        </p>

        <ol className="mt-[10px] mx-4 text-base list-decimal mx-4">
          <li className="pb-[10px] leading-8">
            <p>
              <b className="text-white pb-[10px]"> Networking Opportunities:</b> OSCAFest 2023 is a great platform to
              connect with companies, like-minded professionals, developers, designers, and enthusiasts from various
              parts of Africa and the world. Building relationships with these individuals can lead to collaboration,
              job opportunities, career opportunities, or even new friendships.
            </p>
          </li>

          <li className="pb-[10px] leading-8">
            <p>
              <b className="text-white pb-[10px]"> On-site Mentorship and Job Board: </b> OSCAFest 2023 will feature an
              on-site mentorship program where participants can ask questions and seek guidance from renowned tech
              experts and professionals from various fields. It will also feature an open job board where you can find
              potential opportunities from our sponsors and partners.
            </p>
          </li>

          <li className="pb-[10px] leading-8">
            <p>
              <b className="text-white pb-[10px]"> Learning and Skill Development: </b>The festival features workshops,
              talks, and panel discussions led by African and global tech industry experts with remarkable open-source
              experience around web/mobile development, design, cloud computing, web3/blockchain, AI/data
              science/machine learning, internet of things (embedded systems/hardware), community (technical writing,
              career growth, mental health), and geospatial technologies (OpenStreetMap, QGIS, location intelligence).
              Attending these sessions can help you develop new skills, learn about the latest open-source technologies
              and tools, and gain insights into industry trends.
            </p>
          </li>

          <li className="pb-[10px] leading-8">
            <p>
              <b className="text-white pb-[10px]"> Exposure to Different Projects and Ideas: </b>OSCAFest 2023 will
              showcase numerous open-source projects built by amazing folks in Africa, allowing attendees to explore new
              ideas, find inspiration, find new tools to use/build with, and contribute to exciting initiatives.
              community.
            </p>
          </li>

          <li className="pb-[10px] leading-8">
            <p>
              <b className="text-white pb-[10px]"> Opportunity to Contribute: </b> As an attendee, you may have the
              chance to participate in hackathons, code sprints, or other activities where you can contribute to
              open-source projects, collaborate with others, build some experience, and make a difference in the
            </p>
          </li>
        </ol>

        <br />

        <p className="leading-8">
          Raising your Professional Profile: Attending OSCAFest 2023 can help you establish yourself as an engaged and
          dedicated professional in the open-source community. This can be valuable for your personal brand, career
          growth, or professional resume.
        </p>
      </div>
    )
  },
  {
    question: "How can I register to attend the conference?",
    answer: ""
  },
  {
    question: "How can I buy tickets for one or more people?",
    answer: ""
  },
  {
    question: "Can I get sponsored to attend the conference?",
    answer: ""
  },
  {
    question: "What benefits do I get if I apply to speak and my talk is accepted?",
    answer: ""
  },
  {
    question: "If I have other concerns or questions, who should I talk to?",
    answer: ""
  }
];

function FAQPage() {
  const [openQuestion, setOpenQuestion] = React.useState(null);
  const handleDropdownSwitch = (idx) => setOpenQuestion(() => (openQuestion === `${idx}` ? null : `${idx}`));

  return (
    <Layout>
      <SEO title="FAQ" />
      <Nav />

      <section
        id="faq-hero"
        className="bg-[#1E1E1E] h-[384px] lg:h-[648px] overflow-hidden mb-[80px] lg:pt-[114px] flex items-center justify-center"
        style={bgWrapperStyles}
      >
        <div className="font-humane mt-24 font-medium text-[8rem] md:text-[10rem] lg:text-[20rem] leading-none uppercase">
          <h1 className="text-white text-[128px] lg:text-[400px] font-[500] text-center lg:-mb-16">FAQ</h1>
        </div>
      </section>

      <section className="w-full max-w-[996px] my-[80px] lg:my-[120px] m-auto px-6 lg:p-0">
        <ul>
          {data.map(({ answer, question }, idx) => (
            <li
              style={{ borderBottom: "1px solid #D1D1E3", height: openQuestion === `${idx}` ? "auto" : "100px" }}
              key={idx}
              className="w-full"
            >
              <div
                style={{
                  height: openQuestion === `${idx}` ? "auto" : "60px",
                  overflow: "hidden",
                  transition: "0.3s ease"
                }}
              >
                <div
                  onClick={() => handleDropdownSwitch(idx)}
                  onKeyDown={() => handleDropdownSwitch(idx)}
                  role="presentation"
                  className="flex w-full justify-between h-20 items-center"
                >
                  <p className="text-white text-lg lg:text-3xl font-clashDisplay text-bold"> {question} </p>
                  <div className={"text-white text-lg lg:text-3xl pl-4"}>
                    <FontAwesomeIcon
                      className={openQuestion === `${idx}` ? "rotate-180" : "rotate-0"}
                      icon={"fa-angle-down"}
                    />
                  </div>
                </div>
                {answer}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </Layout>
  );
}

export default FAQPage;
