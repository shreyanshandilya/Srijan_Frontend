import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Sponsor from "../components/Sponsor";
// import { gsap } from 'gsap/gsap-core';
// import Footer from "../components/Footer";
// import Footer from "../components/Footer/footer";
// import Nav from "../components/Navbar/navbar";
import FooterT from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";

function Landing() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  return (
    <>
      {/* <Nav/> */}
      <Hero />
      {/* <Footer /> */}
      <FooterT />
    </>
  );
}

export default Landing;
