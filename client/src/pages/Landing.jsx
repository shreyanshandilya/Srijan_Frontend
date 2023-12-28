import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Sponsor from "../components/Sponsor";
// import { gsap } from 'gsap/gsap-core';
// import Footer from "../components/Footer";
import Footer from "../components/Footer/footer";
import Nav from "../components/Navbar/Navbar"

function Landing() {
  return (
    <>
     <Nav/>
      <Hero />
      <Footer />
    </>
  );
}

export default Landing;
