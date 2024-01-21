import React from "react";
import Particles from "react-tsparticles";
import "./loading.css";
import image from "../../../assets/Images_for_events/bgg.png"
import Navbar from "../../../components/Navbar/navbar";
import FooterT from "../../../components/Footer";


const Loading=()=> {
  return (
    <>
      <Navbar/>
      <body className="flex items-center justify-center min-h-[400px]  max-w-screen" style={{ backgroundImage: `url(${image})`}}>
        <h1 className="text-4xl text-[#dad3a5] floating  font-bold">Loading......</h1>
      </body>
      <FooterT />
    </>
  );
}
export default Loading ;
