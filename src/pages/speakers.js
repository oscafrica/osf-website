import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";
import HeaderSpeak from "../components/headerSpeak";
import Footer from "../components/footer";

import { speakers } from "../components/cloudImages";

function SpeakerPage() {
  return (
    <Layout>
      <SEO
        keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF", "Speakers"]}
        title="Speakers"
      />
      <Nav />
      <HeaderSpeak />
      <section
        id="speakers"
        className="md:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
      >
        <div className="flex flex-wrap text-white">
          {[
            {
              name: "Amanda Casari",
              title: "Engineering Manager | Google",
              image: speakers.amanda,
              value: ""
            },
            {
              name: "Prosper Otemuyiwa",
              title: "Co-founder | Eden & forloop Africa",
              image: speakers.prosper,
              value: ""
            },
            {
              name: "Stephen Walli",
              title: "Principal Program Manager | Microsoft",
              image: speakers.stephen,
              value: ""
            },
            {
              name: "Aniedi Udo-Obong",
              title: "Developer Relations, Sub-Saharan Africa | Google",
              image: speakers.aniedi,
              value: ""
            },
            {
              name: "Eriol Fox",
              title: "Engineering Manager | Google",
              image: speakers.eriol,
              value: ""
            },
            {
              name: "Prosper Otemuyiwa",
              title: "Co-founder | Eden & forloop Africa",
              image: speakers.marlene,
              value: ""
            },
            {
              name: "Stephen Walli",
              title: "Principal Program Manager | Microsoft",
              image: speakers.stephen,
              value: ""
            },
            {
              name: "Aniedi Udo-Obong",
              title: "Developer Relations, Sub-Saharan Africa | Google",
              image: speakers.aniedi,
              value: ""
            },
            {
              name: "Amanda Casari",
              title: "Engineering Manager | Google",
              image: speakers.amanda,
              value: ""
            },
            {
              name: "Prosper Otemuyiwa",
              title: "Co-founder | Eden & forloop Africa",
              image: speakers.prosper,
              value: ""
            },
            {
              name: "Stephen Walli",
              title: "Principal Program Manager | Microsoft",
              image: speakers.stephen,
              value: ""
            },
            {
              name: "Aniedi Udo-Obong",
              title: "Developer Relations, Sub-Saharan Africa | Google",
              image: speakers.aniedi,
              value: ""
            }
          ].map(speaker => (
            <div key={speaker.name} className="relative w-full md:w-1/4 max-w-sm rounded my-2 md:my-8 px-2">
              <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}`} />
              <div className="z-10 -mt-20 pt-2 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
                <h3 className="font-bold text-base">{speaker.name}</h3>
                <p className="text-sm md:text-xs">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export default SpeakerPage;
