import React from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer/footer";

function Event() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#17160e] flex justify-center h-[50vh] items-center  text-4xl md:text-6xl font-bold text-[#efede0]"
      >
        Coming Soon
      </motion.div>
      <Footer />
    </>
  );
}

export default Event;
