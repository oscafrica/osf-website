import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/2023/nav";
import Footer from "../components/2023/footer";
import Hotel from "../images/hotel.png";
import Breadcrumb from "../components/2023/breadcrumb";

// const sectionStyle = "pt-10 z-20 bg-primary-dark-blue leading-7 md:mx-auto md:w-4/5";
const sectionStyle = "mb-[56px] px-[24px] lg:px-0 font-helvetica  max-w-[795px] m-auto space-y-5";
const secHeadingStyle = "font-clashDisplayVariable font-semibold text-2xl lg:text-3xl uppercase";
const secBodyStyle = "leading-8 text-lg text-[#D1D1E3] ";
const secOlStyle = secBodyStyle + "[&>*]:ml-2 [&>*]:mt-3 [&>*]:leading-8 list-decimal list-inside";
const accommodations = [
  {
    key: "4232",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  },
  {
    key: "4se2",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  },
  {
    key: "4s3e2",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  },
  {
    key: "4s5e2",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  },
  {
    key: "67s3e2",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  },
  {
    key: "sss3e2",
    name: "Million Dollar Hotel",
    price: 6500,
    img: Hotel,
    directions: "🚗 32 minutes drive to venue"
  }
];

const Travel = () => {
  const [clickMore, setClickMore] = useState({ state: false, text: "View More", listNum: 4 });

  const readMore = () => {
    if (clickMore.state === false) {
      setClickMore({ state: !clickMore.state, text: "View Less", listNum: -1 });
    } else {
      setClickMore({ state: !clickMore.state, text: "View More", listNum: 4 });
    }
  };

  return (
    <Layout>
      <SEO title="2023" />
      <Nav />
      <Breadcrumb name="Travel Guide" />
      <main className="text-white pt-28">
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}>NIGERIA BASICS</h2>
          <p className={secBodyStyle}>
            Nigeria is one of the liveliest places in Africa that continues to attract visitors from different parts of
            the world with a population of over 170 million people. Nigeria comprises of 36 states with beautiful
            beaches, ultra-modern city centers, houses built with opulent luxury, great architecture, scenic attraction
            sites, universities, museums, national parks, zoos, hotels, resorts and many other amenities visitors see.
          </p>
        </section>
        <div className="w-full mb-[56px] px-[24px] lg:px-1 h-[233px] lg:h-[600px] max-w-[90%] m-auto">
          <iframe
            title="Sustain Africa 2021"
            className="w-full"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/voFbXUQC_8M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}>COVID GUIDELINES</h2>
          <p className={secBodyStyle}>
            We are excited about the opportunity for in-person meetups. For attendees and speakers travelling to
            Nigeria, you must complete a health declaration{" "}
            <a href="https://healthapp.ncdc.gov.ng/" alt="health-declaration">
              {" "}
              form
            </a>{" "}
            and possess a valid vaccination card.
          </p>
          {/* <ol className={secOlStyle}>
            <li>All attendees are to wear a nose mask during the festival.</li>
            <li>Social distancing will be maintained in all the halls used for the festival.</li>
          </ol>
          <p className={secBodyStyle}>
            For attendees and speakers travelling to Nigeria, you must complete an online declaration form, upload a
            copy of a negative PCR COVID-19 test, and book post-arrival tests via the online portal. Once you have done
            this, you will be issued with a “permit to travel” via the portal.The following protocols are in place for
            travellers to Nigeria:
          </p>
          <ol className={secOlStyle}>
            <li>
              All travellers arriving in Nigeria must present a negative COVID-19 PCR test result conducted no more than
              48 hours before departure. For passengers with multiple connections before arrival in Nigeria, the PCR
              test must be valid within 48 hours of boarding from the first point of departure.
            </li>
            <li>
              All travellers are required to do a COVID-19 PCR test on day 2 after arrival. Unvaccinated and partially
              vaccinated (1 dose only) travellers are required to self-isolate for 7 days and to do a COVID-19 test on
              day 2 and day 7 after arrival in order to exit isolation.
            </li>
            <li>
              All outbound travellers departing Nigeria must present evidence of full COVID-19 vaccination OR a negative
              COVID-19 PCR test conducted no more than 48 hours before departure. This must be done regardless of the
              entry requirements of the destination country
            </li>
          </ol> */}
        </section>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}>VISA INFORMATION</h2>
          <p className={secBodyStyle}>
            Are you a citizen of a Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte d &apos ivoire, Gambia, Ghana?
            Then you do not require a visa to visit Nigeria. Citizens of all other countries require a visa obtainable
            from any Nigerian Embassy or Consulate close to them. You will also be required to have proof of polio,
            yellow fever, and Covid19 vaccinations to enter Nigeria.
          </p>
        </section>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}>AIRPORT AND TRAVEL</h2>
          <p className={secBodyStyle}>
            All international travel will be through Murtala Muhammed International Airport, Lagos main international
            airport. Major airlines provide daily services to many international destinations. The airport is about
            30-35 minutes’ drive from Landmark Event Centre, the conference venue. Some hotels also offer pick-up
            services and we encourage participants with such options to use the services. Airport pick-up will be
            available on request for attendees arriving from the 14th of June, 2023. Please email the event organizers
            with your arrival details ahead of time to allow us to plan for pick-ups. Taxis are also available in
            addition to Uber and Bolt services.
          </p>
        </section>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}> ADVICE FOR INTERNATIONAL VISITORS </h2>
          <p className={secBodyStyle}>
            We are super excited about your visit and we can’t wait to welcome you to the OSCA FESTIVAL. Please read
            this information carefully, and check every item. Some of it is crucial and it will help you have a better
            travel process.
          </p>
          <ol className={secOlStyle}>
            <li>
              <span className="font-bold text-white">Visa:</span>You may need a visa to enter Nigeria. You must check
              this, otherwise, you will likely be denied entry, or probably not even be allowed to board your plane. If
              you have any questions, please contact us immediately.
            </li>
            <li>
              <span className="font-bold text-white">Vaccination certificate:</span> You must have yellow fever, polio
              vaccination, and Covid19 certificate to enter Nigeria. Otherwise, you will likely be denied entry. Please
              ensure you have this in advance, do not leave it until the last minute.
            </li>
            <li>
              <span className="font-bold text-white">Malaria precautions:</span> All of Nigeria, including Lagos, is
              indicated as a high-risk zone for malaria. Travelers are advised to take antimalarial medication such as
              Malarone (atovaquone/proguanil hydrochloride) and other precautions. After sunset, avoid mosquito bites by
              covering up with clothing (long sleeves, long trousers), using insect repellents on exposed skin, and when
              necessary: sleeping under a mosquito net. Ensure to bring the appropriate clothing and creams.
            </li>
            <li>
              <span className="font-bold text-white"> Arrival times: </span>We plan to coordinate transport on arrival
              at the airport for some groups. We might not be able to do this for everyone, but please let us know:
              <ul className="[&>*]:ml-2 [&>*]:mt-3 list-disc list-inside px-5">
                <li>The date and time of your arrival in Nigeria</li>
                <li>The date and time of your departure from Nigeria</li>
                <li>Your airline and flight numbers</li>
                <li>Your accommodation location</li>
              </ul>
              We will help if we can, please provide this information in good time. <br />{" "}
              {/* <span className="font-bold text-white">Movies Recommendation: </span> You can watch any of the following
              Nigerian movies on Netflix if you can to get a feel of the vibe of urban Nigeria.
              <ul className="[&>*]:ml-2 [&>*]:mt-3 list-disc list-inside px-5">
                <li>The Wedding Party</li>
                <li>Up North</li>
                <li>Fifty</li>
              </ul> */}
            </li>
          </ol>
        </section>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}> ACCOMMODATION </h2>
          <p className={secBodyStyle}>
            The organizers of the Open Source Festival aim to promote a comfortable and flexible lodging experience for
            attendees. Nigeria provides many and a wide range of hotels, which you can book on the usual online sites.
            Here are a few recommendations according to your budget. We encourage all attendees to make reservations
            early, as prices may change.
          </p>
        </section>
        <section className={sectionStyle}>
          <h2 className={secHeadingStyle}> RECOMMENDATION </h2>
          <p className={secBodyStyle}>There are interesting places to visit in Lagos, Nigeria such as: </p>
          <ul className="[&>*]:ml-2 [&>*]:mt-3 list-disc list-inside px-5">
            <li>Lekki Conservation Centre</li>
            <li>Nike Art Gallery</li>
            <li>Lekki Arts and Craft Centre</li>
          </ul>
        </section>
        <section className="mb-16 w-full max-w-[90%] m-auto">
          <div className="py-5 flex flex-col flex-wrap gap-6 justify-center items-center md:flex-row">
            {accommodations.slice(0, clickMore.listNum).map(({ img, key, name, price, directions }) => (
              <div key={key} className="relative mb-8 md:w-72">
                <img src={img} alt="hotel-img" />
                <div className="absolute bottom-[25%] left-[8%] font-semibold font-clashDisplayVariable"> {name} </div>
                <div className="font-semibold font-clashDisplayVariable mt-2">
                  {" "}
                  {price
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  NGN/night{" "}
                </div>
                <div className="mt-2"> {directions} </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-orange-400 text-brown text-center uppercase w-40 p-3 text-l mb-1 shadow-md flex flex-row text-center"
              onClick={readMore}
            >
              <span className="grow uppercase">{clickMore.text}</span>
              <span className="flex items-center">
                &nbsp; | &nbsp;
                <span className="group-hover:hidden">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0303 9.61029C13.3232 9.90319 13.3232 10.3781 13.0303 10.671L8.03033 15.671C7.73744 15.9638 7.26256 15.9638 6.96967 15.671C6.67678 15.3781 6.67678 14.9032 6.96967 14.6103L11.4393 10.1406L6.96967 5.67095C6.67678 5.37806 6.67678 4.90319 6.96967 4.61029C7.26256 4.3174 7.73744 4.3174 8.03033 4.61029L13.0303 9.61029Z"
                      fill="#22282F"
                    />
                  </svg>
                </span>
                <span className="hidden group-hover:block">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.46967 1.11029C5.76256 0.817402 6.23744 0.817402 6.53033 1.11029L11.5303 6.11029C11.8232 6.40319 11.8232 6.87806 11.5303 7.17096C11.2374 7.46385 10.7626 7.46385 10.4697 7.17096L6 2.70129L1.53033 7.17096C1.23744 7.46385 0.762563 7.46385 0.46967 7.17096C0.176777 6.87806 0.176777 6.40319 0.46967 6.11029L5.46967 1.11029Z"
                      fill="#22282F"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default Travel;
