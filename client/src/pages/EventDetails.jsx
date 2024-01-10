import React, { useState, useCallback, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import FooterT from "../components/Footer";
import { Accordion } from "flowbite-react";
import { motion } from "framer-motion";
import axios from "axios";
import { duration } from "@mui/material";
import { useParams } from "react-router-dom";

function EventDetails(props) {
  const { id } = useParams();
  console.log(id);
  const Eventurl = `https://srijan2024.onrender.com/api/showEvents/${id}`;
  const [details, setDetails] = useState([]);
  //   const [img, setImg] = useState(null);
  //   const [name, setName] = useState(null);
  //   const [org, setOrg] = useState(null);
  //   const [general, setGeneral] = useState(null);
  //   const [img, setImg] = useState(null);
  const fetchAllEvents = useCallback(async () => {
    // const res = await fetch(allEvents);
    const res = await axios.get(Eventurl);
    console.log(res.data);
    setDetails(res.data[0]);
  }, [Eventurl]);
  useEffect(() => {
    // scroll.scrollToTop({ duration: 1000 });
    fetchAllEvents();
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
  }, [fetchAllEvents]);

  return (
    <>
      <div className="bg-[#0d0c06] max-w-screen pt-[100px]">
        <Navbar />
        <div>
          <img src={details.posterWeb} alt="" />
        </div>
        <div className="text-center text-7xl text-[#dad3a5]">
          {" "}
          {details.name}
        </div>
        <div className="text-center text-4xl text-[#dad3a5]">
          {" "}
          Organised by {details.organizer}
        </div>
        <Accordion collapseAll className="px-10 py-5 border-none">
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              General Information
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">{details.descriptionEvent}</p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Rules
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">
                {details.rules &&
                  details.rules.map((rule, index) => {
                    return <p key={index}> {rule}</p>;
                  })}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
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
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Coordinators
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0] flex justify-around items-center">
                {details.contacts &&
                  details.contacts.map((contact, index) => {
                    return (
                      <div className="flex-col" key={index}>
                        <div>{contact.name}</div>
                        <div>{contact.phoneNumber}</div>{" "}
                      </div>
                    );
                  })}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl text-[#efede0] bg-[#0d0c06] hover:bg-[#dad3a5] hover:text-[#0d0c06] focus:text-[#0d0c06] focus:bg-[#dad3a5] focus:ring-2 focus:ring-[#c9bc57]">
              Prizes
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-[#efede0]">{details.prizes}</p>
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
