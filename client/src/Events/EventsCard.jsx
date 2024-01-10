import React from "react";
import "./Events.css";
import EventsList from "./EventsList";
import teams from "../components/Teams/Teams_D";

function EventCard() {
  return (
    <div className="grid grid-cols-3">
      {teams.map((person, index) => (
            <EventsList key={index} {...person} />
        ))}
    </div>
  );
}

export default EventCard;
