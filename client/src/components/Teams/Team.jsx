import React from "react";
import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.jsx";
import Nav from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import { Teampage } from "./Teampage.jsx";

const Teams = () => {
  return (
    <div className="bg-black">
      <Nav />
      <h1 className="pt-20 flex justify-center mb-8 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
        About Us
      </h1>
      <hr />
      <Teampage />
      {/* <div
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
      </div>{" "} */}
      <Footer />
    </div>
  );
};

export default Teams;
