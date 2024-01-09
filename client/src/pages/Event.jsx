import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import "../Events/Events.css";
import axios from "axios";

function Event() {
  const allEvents = "https://srijan2024.onrender.com/api/showAllEvents";
  const [events, setEvents] = useState([]);
  const fetchAllEvents = async () => {
    // const res = await fetch(allEvents);
    const res = await axios.get(allEvents);
    setEvents(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
    fetchAllEvents();
  }, []);
  return (
    <div className="bg-black h-screen overflow-y-hidden">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" flex justify-center h-[50vh] items-center  text-4xl md:text-6xl font-bold text-[#efede0] gradient"
      >
        Coming Soon
      </motion.div>
      <Footer />
    </div>
  );
}

export default Event;
