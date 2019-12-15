import React from "react";

function Cta() {
  return (
    <section className="bg-dark-blue-primary">
      <div className="flex justify-between items-center max-w-4xl mx-auto md:p-8 text-sm">
        {[
          {
            key: 0,
            value: "800+",
            title: "Attendees"
          },
          {
            key: 1,
            value: "2",
            title: "Days"
          },
          {
            key: 2,
            value: "20+",
            title: "Talks"
          },
          {
            key: 3,
            value: "10+",
            title: "Workshops"
          }
        ].map(data => (
          <section
            key={data.key}
            className="px-2 font-bold text-white uppercase"
          >
            <span className="text-h2">
              {data.value}
            </span>
            <p
              className="text-h6 text-gray-200 uppercase"
            >
              {data.title}
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Cta;