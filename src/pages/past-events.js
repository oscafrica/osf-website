import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import { homeBackground } from "../components/2025/cloudImages";

function PastEvents() {
  const events = [
    {
      days: "20th - 22nd",
      month: "February",
      year: "2020"
    },
    {
      days: "24th - 26th",
      month: "March",
      year: "2022"
    },
    {
      days: "15th - 17th",
      month: "June",
      year: "2023"
    },
    {
      days: "12th - 14th",
      month: "June",
      year: "2025"
    }
  ];

  return (
    <Layout>
      <SEO title="Past Events" />
      <section className="bg-orange-primary flex flex-col items-center justify-center lg:h-screen py-24 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-white">
          {events.reverse().map((item, index) => (
            <a
              href={`/${item.year === "2025" ? "" : item.year}`}
              key={index}
              className="flex flex-col items-center justify-center text-center w-full h-64 px-12 rounded-md bg-white text-black"
            >
              <h1 className="font-clashDisplay font-bold text-8xl mb-6 hover:text-orange-primary">{item.year}</h1>
              <p className="font-clashDisplay text-lg lg:text-xl text-gray-600 uppercase">
                {item.days} {item.month}, {item.year}.
              </p>
            </a>
          ))}
        </div>
        <a href="/" className="mt-20 mb-4">
          <img alt="Open Source Community Africa's Logo" className="block mx-auto w-16" src={homeBackground.logo} />
        </a>
        <a href="https://oscafrica.org" target="_blank" rel="noopener noreferrer" className="font-clashDisplay text-md">
          &copy; Open Source Community Africa.
        </a>
      </section>
    </Layout>
  );
}

export default PastEvents;
