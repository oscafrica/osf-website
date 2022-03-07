import React from "react";

function Cta() {
  return (
    <section className="z-10 font-ubuntu bg-army-green-primary">
      <div className="flex flex-wrap max-w-4xl mx-auto lg:p-14 text-center">
        {[
          {
            value: "800+",
            title: "Attendees"
          },
          {
            value: "3",
            title: "Days"
          },
          {
            value: "20+",
            title: "Talks"
          },
          {
            value: "10+",
            title: "Workshops"
          }
        ].map((data) => (
          <div key={data.title} className="w-1/2 lg:w-1/4 p-6">
            <span className="font-anisette text-4xl font-bold text-white uppercase">{data.value}</span>
            <p className="font-anisette text-lg font-bold text-orange-400 uppercase">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cta;
