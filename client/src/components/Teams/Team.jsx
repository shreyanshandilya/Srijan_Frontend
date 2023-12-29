import React from "react";
import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.jsx";
import Nav from '../Navbar/navbar.jsx'
const Teams = () => {
  return (
    <div>
    <Nav/>
    <div
      className="teams"
      style={{
        paddingTop:"130px",
        display: "flex",
        flexWrap: "wrap",
        background: "#245953",
      }}
    >
      {teams.map((person, index) => (
        <AvatarCard key={index} {...person} />
      ))}
    </div> </div>
  );
};

export default Teams;
