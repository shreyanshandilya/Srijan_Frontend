import React, { useState, useCallback, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import FooterT from "../components/Footer";
import { Accordion } from "flowbite-react";
import { motion } from "framer-motion";
import axios from "axios";
import { duration } from "@mui/material";
import { useParams } from "react-router-dom";

function EventDetails(props) {
  const id = useParams();
  console.log(id);
  const Eventurl = `https://srijan2024.onrender.com/api/showEvents/${id}`;
  const [details, setDetails] = useState([]);
  const fetchAllEvents = useCallback(async () => {
    // const res = await fetch(allEvents);
    const res = await axios.get(Eventurl);
    console.log(res);
    // .then((res) => {
    //   allEvents = res.data;
    //   clubEvents = allEvents.filter((event) => {
    //     return event.type == 1;
    //   });
    //   deptEvents = allEvents.filter((event) => {
    //     return event.type == 2;
    //   });
    // });
    // console.log(allEvents);
  }, [Eventurl]);
  useEffect(() => {
    // scroll.scrollToTop({ duration: 1000 });
    fetchAllEvents();
  }, [fetchAllEvents]);
  return (
    <>
      <div className="bg-[#0d0c06] max-w-screen pt-[100px]">
        <Navbar />
        <div></div>
        <div className="text-center text-7xl text-[#dad3a5]">
          {" "}
          Chemical Coders
        </div>
        <div className="text-center text-4xl text-[#dad3a5]">
          {" "}
          Organised by Chemical
        </div>
        <Accordion collapseAll className="px-10 py-5 border-none">
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              General Information
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Problem Statement aand Rules</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Problem Statement aand Rules</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1, y: -10 }}
            className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-xl w-full sm:w-auto px-12 py-3.5 text-center my-5"
          >
            Register
          </motion.button>
        </div>
      </div>
      <FooterT />
    </>
  );
}

export default EventDetails;
