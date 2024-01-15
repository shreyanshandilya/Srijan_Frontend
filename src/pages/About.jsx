import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";

function About() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-[url('https://res.cloudinary.com/dkdratnao/image/upload/v1705271577/bg0fabout_v8frwc.jpg')] bg-cover bg-no-repeat bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50">
        <div className="py-8 px-2 sm:px-4 max-w-screen-xl text-center flex flex-col sm:flex-row justify-center items-center lg:py-16 mx-4 sm:mx-10">
          <motion.div
            //   ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout
            transition={{ duration: 1 }}
          >
            <h1 className="mb-8 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="text-[#efede0] text-base md:text-lg lg:text-xl backdrop-blur-xl bg-opacity-30 py-10 text-justify md:text-center">
              Established in 1926, the Indian Institute of Technology (Indian
              School of Mines) Dhanbad, erstwhile Indian School of Mines
              Dhanbad, stands as a prestigious engineering and research
              institution in the heart of the Coal Capital of India, Dhanbad.
              Approaching its centenary, IIT (ISM) holds the esteemed Institute
              of National Importance and has evolved from its initial focus on
              Earth Sciences and Engineering to encompass 18 academic
              departments across various technical disciplines. Standing as the
              third oldest among IITs, IIT (ISM) has experienced significant
              growth beyond its roots in Earth Sciences. Notably, it achieved
              the 26th position in the QS World University Rankings for Mining
              and Mineral Engineering in 2022. The institute admits
              undergraduate students through the Joint Entrance Examination
              (Advanced), making it a beacon of academic excellence and
              innovation that attracts students nationwide. Integral to the
              institutes vibrant culture is SRIJAN, a Socio-Cultural Festival
              that has been captivating audiences in Eastern India since 1977.
              With over 30,000 annual attendees from 200 colleges nationwide,
              SRIJAN serves as a dynamic platform for budding talents. The
              festival, boasting a prize pool exceeding INR 7.5 lakhs, provides
              participants with a unique opportunity to showcase their
              creativity, personality, and talents, fostering interaction and
              skill enhancement on a national scale.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" mx-[6vw] md:mx-[10vw] flex justify-center items-center bg-white/30 backdrop-blur-md rounded-lg shadow mb-10"
          >
            <div className="flex flex-col items-center py-10 px-8 ">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703957539/prof_convener_mojstc.jpg"
                alt="Prof. Sanjoy Mandal"
              />
              <h5 className="mb-1 text-xl font-medium text-[#0d0c06]">
                Prof. Sanjoy Mandal
              </h5>
              <span className="text-sm text-[#dad3a5]">
                Dept of Electrical Engineering
              </span>
              <h5 className="mb-1 text-lg font-medium text-[#0d0c06]">
                Convenor
              </h5>
              <div className="flex mt-4 md:mt-6 text-[#0d0c06] md:text-base text-sm">
                <p>
                  Identification of a country’s civilization has always been
                  through the culture its people follow and promote. It
                  generates a sense of unity via common values, beliefs, and
                  customs and standards. When knowledge and education are
                  promoted in a culturally sensitive setting, everyone
                  benefits—individuals as well as the society, nation, or world
                  at large. We are proud of India's distinct culture, which
                  represents the diversity of the country. Its innate creativity
                  and culture are synonymous with much of its social, economic,
                  and other activities. In keeping with the aforementioned, the
                  IIT (ISM) Dhanbad's three-day Annual Socio-Cultural Srijan
                  Festival, SRIJAN '24, aims to foster a sense of solidarity and
                  unity in diversity through a range of events honouring the
                  various customs and cultures across our nation. The ideas of
                  the next generation drive our nation's continuous growth. In
                  response, SRIJAN '24 offers a friendly setting for showcasing
                  one's abilities and creative concepts that could advance
                  social causes. It includes a variety of competitions where
                  participants can polish their skills in dance, singing, poetry
                  writing, arts, and other areas in addition to competing, all
                  leading up to the much-anticipated gala star night. Warmest
                  greetings from Team SRIJAN '24, who look forward to your kind
                  attendance at the socio-cultural extravaganza to mark this
                  significant milestone in IIT (ISM) Dhanbad's history.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
