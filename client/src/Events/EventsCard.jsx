import React, { useState, useEffect } from "react";
import "./Events.css";
import EventsList from "./EventsList";
import teams from "../components/Teams/Teams_D";

function EventCard({ event }) {
  console.log(event);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6">
      {event.map((person, index) => (
        <EventsList key={index} {...person} />
      ))}
    </div>
  );
}

export default EventCard;
