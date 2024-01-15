import React, { useEffect, useState, useCallback } from "react";
import Hero from "../components/Hero";
import FooterT from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Landing({load}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth > 760 && load) {
      navigate("/preloader");
    }
  }, []);
  return (
    <>
      {/* <Nav/> */}
      <Hero /> <FooterT />
    </>
  );
}

export default Landing;
