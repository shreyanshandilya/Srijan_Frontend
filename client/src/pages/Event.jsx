import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import "../Events/Events.css";

function Event() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#17160e] flex justify-center h-[50vh] items-center  text-4xl md:text-6xl font-bold text-[#efede0] gradient"
      >
        Coming Soon
      </motion.div>
      <Footer />
    </>
  );
}

export default Event;
