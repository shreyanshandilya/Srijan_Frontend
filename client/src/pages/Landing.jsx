import React, { useEffect, useState, useCallback } from "react";
import Hero from "../components/Hero";
import FooterT from "../components/Footer";
import BgVideo from "../components/BgVideo";

function Landing() {
  const [load, setLoad] = useState(true);
  useEffect(()=>{
    if(window.innerWidth<=760) setLoad(false);
  },[])
  return (
    <>
      {/* <Nav/> */}
      {load ? <BgVideo setLoad={setLoad} /> : (<> <Hero /> <FooterT /> </>)}

    </>
  );
}

export default Landing;
