import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import "../Events/Events.css";
import axios from "axios";
import EventCard from "../Events/EventsCard";

function Event() {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [clubEvents, setClubEvents] = useState([]);
  const [deptEvents, setDeptEvents] = useState([]);
  const allEventsUrl = "https://srijan2024.onrender.com/api/showAllEvents";

  const fetchAllEvents = useCallback(async () => {
    var clubEvents = [],
      deptEvents = [];
    // const res = await fetch(allEvents);
    const res = await axios.get(allEventsUrl);
    // .then((res) => {
    //   allEvents = res.data;
    //   clubEvents = allEvents.filter((event) => {
    //     return event.type == 1;
    //   });
    //   deptEvents = allEvents.filter((event) => {
    //     return event.type == 2;
    //   });
    // });
    res.data.map((obj) => {
      if (obj.type == 1) clubEvents.push(obj);
      if (obj.type == 2) deptEvents.push(obj);
    });
    // console.log(allEvents);
    setAllEvents(res.data);
    setClubEvents(clubEvents);
    setDeptEvents(deptEvents);
    setEvents(res.data);
  }, [allEventsUrl]);
  console.log(events);

  // console.log(allEvents);
  // console.log(localStorage.geItem("clubEvents"));
  // console.log(localStorage.geItem("deptEvents"));
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
    fetchAllEvents();
  }, [fetchAllEvents]);
  // console.log(events);
  const handleAllEvents = () => {
    setEvents(allEvents);
    // console.log("hello all events");
    // console.log(allEvents);
    // console.log(events);
  };
  const handleClubEvents = () => {
    setEvents(clubEvents);
    // setEvents(localStorage.getItem("clubEvents"));
    // console.log("hello club events");
    // console.log(clubEvents);
  };
  const handleDeptEvents = () => {
    setEvents(deptEvents);
    // setEvents(localStorage.getItem("deptEvents"));
    // console.log("hello dept events");
    // console.log(deptEvents);
  };
  return (
    <div className="bg-black h-auto">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" flex justify-center h-[50vh] items-center  text-4xl md:text-6xl font-bold text-[#efede0] gradient"
      >
        Events
      </motion.div>
      <div className="flex justify-around items-center">
        <button
          onClick={handleAllEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          All
        </button>
        <button
          onClick={handleClubEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Club
        </button>
        <button
          onClick={handleDeptEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Department
        </button>
      </div>
      <EventCard event={events} />
      <Footer />
    </div>
  );
}

export default Event;
