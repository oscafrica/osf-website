import React from "react";

function PreviousEvents() {
  return (
    <div>
      Previous events
      <div className="mt-5 mb-10">
        <a href="/2020" className="bg-orange-400 uppercase p-2 text-brown tracking-wider">
          OSCAFest 2020
        </a>
        <a href="/2022" className="bg-orange-400 uppercase p-2 text-white tracking-wider ml-5">
          OSCAFest 2022
        </a>
      </div>
    </div>
  );
}

export default PreviousEvents;
