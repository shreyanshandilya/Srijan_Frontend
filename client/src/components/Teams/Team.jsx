import React from "react";
import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.jsx";
import Nav from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
const Teams = () => {
  return (
    <div>
      <Nav />
      <h1 className="flex justify-center items-center pt-20 text-5xl bg-[#0d0c06] text-[#dad3a5] sm:text-7xl" style={{fontWeight:"200"}}>
        Team
      </h1>
      <hr/>
      <div
        className="teams"
        style={{
          paddingTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          background: "#0d0c06",
        }}
      >
        {teams.map((person, index) => (
          <AvatarCard key={index} {...person} />
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Teams;
