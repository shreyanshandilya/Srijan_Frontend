import React from "react";
import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.js";

const Teams = () => {
  return (
    <div
      className="teams"
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "#245953",
      }}
    >
      {teams.map((person, index) => (
        <AvatarCard key={index} {...person} />
      ))}
    </div>
  );
};

export default Teams;
