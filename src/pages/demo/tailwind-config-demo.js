import React from "react";
import SEO from "../../components/seo";
import Nav from "../../components/nav";

function TailwindDemoPage() {
  return (
    <div className="flex flex-col font-avenir min-h-screen">
      <Nav />
      <SEO keywords={["gatsby", "tailwind", "tailwind typography page", "tailwindcss"]} title="Typography demo pages" />
      <main className="flex flex-col flex-1 md:justify-center mt-20 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        <h2 className="font-avenir text-h1 mb-10 mt-20 font-bold font-avenir capitalize">
          Tailwind configuration demo page
        </h2>
        <section>
          <article className="mb-10">
            <h3 className="mb-2 font-bold text-h5 uppercase text-orange-300">Font sizes</h3>
            <div className="mb-4 ">
              <p className="text-h1">H1 heading</p>
              <p className="text-h2">H2 heading</p>
              <p className="text-h3">H3 heading</p>
              <p className="text-h4">H4 heading</p>
              <p className="text-h5">H5 heading</p>
              <p className="text-h6">H6 heading</p>
              <p className="text-base">This is an example paragraph</p>
            </div>
          </article>
          <article className="mb-10">
            <h3 className="font-avenir font-bold mb-2 text-h5 font-bold uppercase text-orange-primary">colors</h3>
            <div className="flex mb-4 -mx-2">
              <div className="lg:w-1/5 px-2">
                <div className="flex w-full bg-orange-100">
                  <div className="bg-orange-primary w-1/2"></div>
                  <div className="flex-column w-1/2">
                    <div className="h-10 bg-orange-100"></div>
                    <div className="h-10 bg-orange-200"></div>
                    <div className="h-10 bg-orange-300"></div>
                    <div className="h-10 bg-orange-400"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/5 px-2">
                <div className="flex w-full bg-dark-blue-100">
                  <div className="bg-dark-blue-primary w-1/2"></div>
                  <div className="flex-column w-1/2">
                    <div className="h-10 bg-dark-blue-100"></div>
                    <div className="h-10 bg-dark-blue-200"></div>
                    <div className="h-10 bg-dark-blue-300"></div>
                    <div className="h-10 bg-dark-blue-400"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/5 px-2">
                <div className="flex w-full bg-gray-100 h-full">
                  <div className="bg-gray-primary w-1/2 h-full"></div>
                  <div className="flex-column w-1/2">
                    <div className="h-20 bg-gray-100"></div>
                    <div className="h-20 bg-gray-200"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/5 px-2">
                <div className="flex w-full bg-orange-100 h-full">
                  <div className="bg-light-green-primary w-1/2 h-full"></div>
                  <div className="flex-column w-1/2">
                    <div className="h-20 bg-light-green-100"></div>
                    <div className="h-20 bg-light-green-200"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/5 px-2">
                <div className="flex w-full bg-orange-100 h-full">
                  <div className="bg-dark-green w-full h-full"></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default TailwindDemoPage;
