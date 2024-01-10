import React from "react";
import "./Events.css";
const EventsList = ({
  name,
  position,
  image,
  team,
  linkedin_url,
  insta_url,
}) => {
  return (
    <>    
    <div className="p-4 m-5">
      <div className="flex justify-center items-center object-contain h-40 w-40 m-3">
        <img src={image} />
      </div> 
      <div className="grid grid-cols-2 text-white font-bold">
        <div>event:</div>
        <div>{name}</div>
      </div> 
    </div>
    </>
  );
};

export default EventsList;
