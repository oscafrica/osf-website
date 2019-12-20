import React from "react";
import SEO from "../../components/seo";
import Nav from "../../components/nav";

function TypographyDemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav/>
        <SEO
            keywords={["gatsby", "tailwind", "tailwind typography page", "tailwindcss"]}
            title="Typography demo pages"
        />
        <main className="flex flex-col flex-1 md:justify-center mt-20 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            <h2  className="font-avenir text-h1 mb-10 mt-10 font-bold capitalize">
                Typography demo page
            </h2>
            <section className="flex justify-between -mx-2">
                <article className = 'font-avenir lg:w-1/4 p-2'>
                    <h3 className = 'mb-2 font-bold text-h42 uppercase text-orange-300'>avenir roman</h3>
                    <div className="mb-4">
                        <p className="text-h1 font-bold">Bold</p>
                        <p className="text-h2 font-bold italic">Bold italic</p>
                        <p className="text-h3 font-medium">Medium</p>
                        <p className="text-h4 font-medium italic">Medium Italic</p>
                        <p className="text-h font-light">Light</p>
                        <p className="text-h6 font-light italic">Light Italic</p>
                        <p className="text-base italic">Italic</p>
                        <p className="text-base">Regular</p>
                    </div>
                </article>
                <article className = 'font-avenir-black lg:w-1/4 p-2'>
                    <h3 className = 'mb-2 font-bold text-h42 uppercase text-orange-300'>avenir black</h3>
                    <div className="mb-4">
                        <p className="text-h1 font-bold">Bold</p>
                        <p className="text-h2 font-bold italic">Bold italic</p>
                        <p className="text-h3 font-medium">Medium</p>
                        <p className="text-h4 font-medium italic">Medium Italic</p>
                        <p className="text-h font-light">Light</p>
                        <p className="text-h6 font-light italic">Light Italic</p>
                        <p className="text-base italic">Italic</p>
                        <p className="text-base">Regular</p>
                    </div>
                </article>
                <article className = 'font-avenir-book lg:w-1/4 p-2'>
                    <h3 className = 'mb-2 font-bold text-h42 uppercase text-orange-300'>avenir book</h3>
                    <div className="mb-4">
                        <p className="text-h1 font-bold">Bold</p>
                        <p className="text-h2 font-bold italic">Bold italic</p>
                        <p className="text-h3 font-medium">Medium</p>
                        <p className="text-h4 font-medium italic">Medium Italic</p>
                        <p className="text-h font-light">Light</p>
                        <p className="text-h6 font-light italic">Light Italic</p>
                        <p className="text-base italic">Italic</p>
                        <p className="text-base">Regular</p>
                    </div>
                </article>
                <article className = 'font-ubuntu lg:w-1/4 p-2'>
                    <h3 className = 'mb-2 font-bold text-h42 uppercase text-orange-300'>ubuntu</h3>
                    <div className="mb-4">
                        <p className="text-h1 font-bold">Bold</p>
                        <p className="text-h2 font-bold italic">Bold italic</p>
                        <p className="text-h3 font-medium">Medium</p>
                        <p className="text-h4 font-medium italic">Medium Italic</p>
                        <p className="text-h font-light">Light</p>
                        <p className="text-h6 font-light italic">Light Italic</p>
                        <p className="text-base italic">Italic</p>
                        <p className="text-base">Regular</p>
                    </div>
                </article>
            </section>
        </main>
    </div>
  );
}

export default TypographyDemoPage;
