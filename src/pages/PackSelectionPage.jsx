import React from "react";
import "../assets/PackSelectionPage.css";
import logo from "../assets/SrijanLogo.png";

export const PackSelectionPage = () => {

  return (
    <>
      <h1 className="mb-8 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
        Choose Your Pack
      </h1>
      <div className="container">
        <div className="box-out my-40">
          <div className="book books-1"></div>
          <div className="book books-2"></div>
          <div className="book books-3"></div>
        </div>
        <div className="text-white">Your Pack info</div>
      </div>

      <a href="/" className="dr-url" target="_blank">
        <img className="dr" src={logo} alt="" />
      </a>
    </>
  );
};
