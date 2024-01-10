import React, { useState, useEffect } from "react";
import "./Events.css";
import EventsList from "./EventsList";
import teams from "../components/Teams/Teams_D";

function EventCard({ event }) {
  console.log(event);
  return (
    <div className="grid grid-cols-3">
      {event.map((person, index) => (
        <EventsList key={index} {...person} />
      ))}
    </div>
  );
}

export default EventCard;
