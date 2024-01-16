import React, { useState, useCallback, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import FooterT from "../components/Footer";
import { Accordion } from "flowbite-react";
import { motion } from "framer-motion";
import axios from "axios";
import { duration } from "@mui/material";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import EventArr from "../Events/Database/SrijanEvents";
// import { motion } from "framer-motion";

function EventDetails(props) {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  const { category, name } = useParams();
  console.log(category);
  console.log(name);
  const eventArr = EventArr.filter((e) => {
    return e.EventName == name;
  });
  // const Eventurl = `https://srijan2024.onrender.com/api/showEvents/${id}`;
  const [details, setDetails] = useState([]);
  //   const [img, setImg] = useState(null);
  //   const [name, setName] = useState(null);
  //   const [org, setOrg] = useState(null);
  //   const [general, setGeneral] = useState(null);
  //   const [img, setImg] = useState(null);
  // const fetchAllEvents = useCallback(async () => {
  //   // const res = await fetch(allEvents);
  //   const res = await axios.get(Eventurl);
  //   console.log(res.data);
  //   setDetails(res.data[0]);
  // }, [Eventurl]);
  useEffect(() => {
    // scroll.scrollToTop({ duration: 1000 });
    // fetchAllEvents();
    // const rules = [];
    // details.rules.forEach((rule) => {
    //   rules.push(<div>{rule}</div>);
    // });
    // const stages = [];
    // details.stages.forEach((stage) => {
    //   //   console.log(details.contacts);
    //   stages.push(<div>{stage.description}</div>);
    // });
    // const contacts = [];
    // details.contacts.forEach((contact) => {
    //   //   console.log(contact);
    //   contacts.push(
    //     <div className="flex-col">
    //       <div>{contact.name}</div>
    //       <div>{contact.phoneNumber}</div>
    //     </div>
    //   );
    // });
  }, []);

  return (
    <>
      <div className="bg-[#0d0c06] w-screen pt-[100px]">
        <Navbar />
        <div>
          <img src={details.posterWeb} alt="" />
        </div>
        <div className="text-center font-bold text-7xl text-[#dad3a5]">
          {" "}
          {eventArr[0].EventName}
        </div>
        <div className="text-center my-3 underline italic text-4xl text-[#c9bc57]">
          {" "}
          <a
            href={`${eventArr[0].RuleBookLink}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Rulebook Link
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Link to="register">
            <motion.button
              layout
              whileHover={{ y: -10, scale: 1.1 }}
              type="button"
              className="text-[#0d0c06] bg-gradient-to-r from-[#efede0] via-[#dad3a5] to-[#dad3a5] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-[#c9bc57] shadow-lg shadow-[#fbe10e]/50 dark:shadow-lg font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 my-5"
            >
              Register
            </motion.button>
          </Link>
        </div>
        <Accordion collapseAll className="px-10 pt-5 pb-10 border-none">
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Description
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">
                {eventArr[0].miniDescription}
              </p>
              <p className="mb-2 text-[#efede0]">{eventArr[0].Description}</p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Rules
            </Accordion.Title>
            <Accordion.Content>
              <ul className="mb-2 text-[#efede0] list-disc">
                {eventArr[0].Rules &&
                  eventArr[0].Rules.map((rule, index) => {
                    return <li key={index}> {rule}</li>;
                  })}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          {/* <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Stages
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">
                {details.stages &&
                  details.stages.map((stage, index) => {
                    return <p key={index}> {stage.description}</p>;
                  })}
              </p>
            </Accordion.Content>
          </Accordion.Panel> */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Coordinators
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0] flex justify-around items-center">
                {eventArr[0].Contactdetails &&
                  eventArr[0].Contactdetails.map((contact, index) => {
                    return (
                      <div className="flex-col" key={index}>
                        <div className="font-semibold">{contact.name}</div>
                        <div>{contact.phone}</div>{" "}
                      </div>
                    );
                  })}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Members
            </Accordion.Title>
            <Accordion.Content>
              {/* <p className="mb-2 text-[#efede0]">{eventArr[0].Venue}</p>
               */}
              {eventArr[0].Minimummembers == eventArr[0].Maximummembers ? (
                <>
                  <p className="mb-2 text-lg text-[#efede0]">
                    Members:{" "}
                    <span className="font-semibold">
                      {eventArr[0].Maximummembers}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-2 text-lg text-[#efede0]">
                    Maximum Members :
                    <span className="font-semibold">
                      {eventArr[0].Maximummembers}
                    </span>
                  </p>
                  <p className="mb-2 text-lg text-[#efede0]">
                    Minimum Members :
                    <span className="font-semibold">
                      {eventArr[0].Minimummembers}
                    </span>
                  </p>
                </>
              )}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        {/* <div className="flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1, y: -10 }}
            className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-xl w-full sm:w-auto px-12 py-3.5 text-center my-5"
          >
            Register
          </motion.button>
        </div> */}
      </div>
      <FooterT />
    </>
  );
}

export default EventDetails;
