import React from "react";
import useScript from "../hooks/useScript";

function Sched() {
  return (
    <section className="flex flex-col lg:flex-row items-center my-20 mx-4 lg:mx-32">
      <div>
        <a id="sched-embed" href="https://oscafest.sched.com/">
          View the Open Source Festival 2020 schedule &amp; directory.
        </a>
        { useScript("https://oscafest.sched.com/js/embed.js") }
      </div>
    </section>
  );
}

export default Sched;
