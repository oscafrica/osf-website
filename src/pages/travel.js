import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import TravelHead from "../components/travelHead";
import Hotel from "../components/hotels";
import Restaurant from "../components/restaurants";
import Footer from "../components/footer";

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Travel Guide" />
      <Nav />
      <TravelHead />
      <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">NIGERIA BASICS</h1>
            <p className="text-base my-4">
              Nigeria is one of the liveliest places in Africa that continues to attract visitors from different parts
              of the world with a population of over 170 million people. Nigeria comprises of 36 states with beautiful
              beaches, ultra-modern city centers, houses built with opulent luxury, great architecture, scenic
              attraction sites, universities, museums, national parks, zoos, hotels, resorts and many other amenities
              visitors see.
            </p>
            <iframe
              title="Promotional Video of Lagos"
              width="1000"
              height="400"
              src="https://www.youtube.com/embed/HbsdLI8kaWc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">VISA INFORMATION</h1>
            <p className="text-base my-4">
              Are you a citizen of a Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte d&apos;ivoire, Gambia, Ghana?
              Then you do not require a visa to visit Nigeria. Citizens of all other countries require a visa obtainable
              from any Nigerian Embassy or Consulate close to them. <br />
              Visit&nbsp;
              <a
                className="underline"
                href="https://portal.immigration.gov.ng/visa/freshVisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              &nbsp;to apply for Visa. Do you have an African passport? See{" "}
              <a
                className="underline"
                href="https://immigration.gov.ng/voa-new/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              &nbsp;to apply for Visa-on-Arrival (VoA). You will also be required to have proof of polio and yellow
              fever vaccinations to enter <b>Nigeria</b>.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">AIRPORT AND TRAVEL</h1>
            <p className="text-base my-4">
              All international travel will be through Murtala Muhammed International Airport, Lagos main international
              airport. Major airlines provide daily services to many international destinations. The airport is about
              17-24 minutes’ drive from Zone Tech Park, the conference venue. Some hotels also offer pick-up services
              and we encourage participants with such options to use the services. Airport pick-up will be available on
              request for attendees arriving from the 18th of February, 2020. Please&nbsp;
              <a className="underline" href="mailto:event@oscafrica.org" target="_blank" rel="noopener noreferrer">
                email the event organizers
              </a>
              &nbsp;with your arrival details ahead of time to allow us to plan for pick-ups. Taxis are also available
              in addition to&nbsp;
              <a className="underline" href="https://www.uber.com/ng/en/" target="_blank" rel="noopener noreferrer">
                Uber
              </a>
              &nbsp;and&nbsp;
              <a
                className="underline"
                href="https://bolt.eu/en/cities/lagos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bolt
              </a>
              &nbsp;services.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full text-dark-blue-primary-600">
            <h1 className="text-spo font-bold font-ubuntu">ADVICE FOR INTERNATIONAL VISITORS</h1>
            <p className="text-base my-4">
              We are super excited about your visit and we can’t wait to welcome you to the OSCA FESTIVAL. <br />
              Please read this information <b>carefully</b>, and <b>check every item</b>. Some of it is crucial and it
              will help you have a better travel process.
            </p>
            <ol className="text-base my-4 list-none lg:list-decimal">
              <li className="my-4">
                <b>Visa</b>: You may need a visa to enter Nigeria. You must check this, otherwise, you will likely be
                denied entry, or probably not even be allowed to board your plane. Got any questions?&nbsp;
                <a className="underline" href="mailto:event@oscafrica.org" target="_blank" rel="noopener noreferrer">
                  Please contact us immediately.
                </a>
              </li>
              <li className="my-4">
                <b>Vaccination certificate</b>: You must have yellow fever and polio vaccination certificate to enter
                Nigeria. Otherwise, you will likely be denied entry. Please ensure you have this in advance, do not
                leave it until the last minute. Other certificates include Hepatitis A, Tetanus, and Typhoid.
              </li>
              <li className="my-4">
                <b>Malaria precautions</b>: All of Nigeria, including Lagos, is indicated as a high-risk zone for
                malaria. Travelers are advised to take antimalarial medication such as Malarone (atovaquone/proguanil
                hydrochloride) and other precautions. After sunset, avoid mosquito bites by covering up with clothing
                (long sleeves, long trousers), using insect repellents on exposed skin, and when necessary: sleeping
                under a mosquito net. Ensure to bring the appropriate clothing and creams.
              </li>
              <li className="my-4">
                <b>Arrival times</b>: We hope to co-ordinate transport on arrival at the airport for some groups. We
                might not be able to do this for everyone, but please tell us:
                <ul className="list-no lg:list-disc my-2">
                  <li>The date and time of your arrival in Nigeria</li>
                  <li>The date and time of your departure from Nigeria </li>
                  <li>Your airline and flight numbers</li>
                  <li>Your accommodation location</li>
                </ul>
                We will help if we can, please provide this information in good time.
              </li>
              <li className="my-4">
                <b>Movies Recommendation</b>: Watch any of the following Nigerian movies on Netflix if you can to get a
                feel of the vibe of urban Nigeria.
                <ul className="list-no lg:list-disc my-2">
                  <a
                    className="underline"
                    href="https://www.netflix.com/ng/title/80168301"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>The Wedding Party</li>
                  </a>
                  <a
                    className="underline"
                    href="https://www.netflix.com/ng/title/81172902"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Up North </li>
                  </a>
                  <a
                    className="underline"
                    href="https://www.netflix.com/ng/title/80082739"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Fifty</li>
                  </a>
                </ul>
              </li>
              <li className="my-4">
                <b>Venue Highlights</b>: Here are{" "}
                <a
                  className="underline"
                  href="https://bit.ly/devfestlagos18-500photos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pictures of DevFest Lagos 2018
                </a>{" "}
                - same venue as the Open Source Festival, but the festival audience might not be as large.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Hotel />
      <Restaurant />
      <Footer />
    </Layout>
  );
}

export default Schedule;
