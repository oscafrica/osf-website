import React from "react";

function Cta() {
  return (
    <section className="z-10 font-ubuntu bg-dark-blue-500">
      <div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto p-12 text-center">
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
        ].map(data => (
          <div key={data.title} className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-6">
            <span className="text-h2 font-bold text-white uppercase">{data.value}</span>
            <p className="text-h6 font-bold text-gray-200 uppercase">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cta;