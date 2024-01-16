// Card.js

import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import img1 from "./pngs/Dance.05190f49712746c776b2.png";
import img2 from "./pngs/Music.c91b700a4c5acdc4bb1c.png";
import img3 from "./pngs/Fashion.2b3060fc31ebc2867069.png";
import img4 from "./pngs/FineArts.6b8125d2615ce4bed692.png";
import img5 from "./pngs/FilmFest.0aa5ff627365b4ef7d2f.png";
import img6 from "./pngs/Drama.6fbebe13b5a463eababb.png";
import img7 from "./pngs/download.png";
import img8 from "./pngs/Literary.ee3a4fdc591b333cb436.png";
import img9 from "./pngs/pngegg.png";
import img10 from "./pngs/culinary.png";
// import img9 from "./pngs/"

const Card = ({ index }) => {
  const navigate = useNavigate();

  const Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const Names = [
    "DANCE",
    "MUSIC",
    "FASHION",
    "FINEARTS",
    "CINEMATOGRAPHY",
    "DRAMATICS",
    "QUIZ",
    "LITERARY",
    "COMEDY",
    "CULINARY",
  ];
  return (
    <div className="m-10">
      <div
        className="container0 noselect"
        onClick={() => {
          navigate(`/event/${Names[index].toLocaleLowerCase()}`);
        }}
      >
        <div className="canvas0">
          <div className="tracker0 tr-1"></div>
          <div className="tracker0 tr-2"></div>
          <div className="tracker0 tr-3"></div>
          <div className="tracker0 tr-4"></div>
          <div className="tracker0 tr-5"></div>
          <div className="tracker0 tr-6"></div>
          <div className="tracker0 tr-7"></div>
          <div className="tracker0 tr-8"></div>
          <div className="tracker0 tr-9"></div>
          <div className="tracker0 tr-10"></div>
          <div className="tracker0 tr-11"></div>
          <div className="tracker0 tr-12"></div>
          <div className="tracker0 tr-13"></div>
          <div className="tracker0 tr-14"></div>
          <div className="tracker0 tr-15"></div>
          <div className="tracker0 tr-16"></div>
          <div className="tracker0 tr-17"></div>
          <div className="tracker0 tr-18"></div>
          <div className="tracker0 tr-19"></div>
          <div className="tracker0 tr-20"></div>
          <div className="tracker0 tr-21"></div>
          <div className="tracker0 tr-22"></div>
          <div className="tracker0 tr-23"></div>
          <div className="tracker0 tr-24"></div>
          <div className="tracker0 tr-25"></div>
          <div id="card">
            <img
              src={Images[index]}
              style={{
                margin: "auto",
                marginTop: "20px",
                marginBottom: "10px",
                height: "65%",
              }}
            ></img>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  margin: "auto",
                  fontSize: "1.25rem",
                  fontFamily: "Salsa",
                  marginTop: "2px",
                }}
                gutterBottom
              >
                {Names[index]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
