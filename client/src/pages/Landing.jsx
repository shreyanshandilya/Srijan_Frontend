import React, { useEffect, useState, useCallback } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Sponsor from "../components/Sponsor";
// import { gsap } from 'gsap/gsap-core';
// import Footer from "../components/Footer";
// import Footer from "../components/Footer/footer";
// import Nav from "../components/Navbar/navbar";
import FooterT from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import BgVideo from "../components/BgVideo";

function Landing() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      setLoad(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* <Nav/> */}
      {load ? <BgVideo /> : (<> <Hero /> <FooterT /> </>)}
      {/* <Footer /> */}
      
    </>
  );
}

export default Landing;
