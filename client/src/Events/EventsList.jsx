import React from "react";
import "./Events.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import imagee from "../assets/bgimage.jpg"
import { Link } from "react-router-dom";
const EventsList = ({ name, posterWeb, organizer, prizes, _id }) => {
  return (
    <>
      <div class="container">
        <div className="box"
        >
          <span></span>
          <div class="content">
            <h2>{name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsList;
