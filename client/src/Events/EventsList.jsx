import React from "react";
import "./Events.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
const EventsList = ({ name, posterWeb, organizer, prizes, _id }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
      >
        <div className="">
          <img
            className="rounded-t-lg h-[40vh] object-cover"
            src={posterWeb}
            alt=""
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]">
            {name}
          </h5>
          <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
            Organized by:{" "}
            <span className="text-md font-semibold"> {organizer}</span>
          </p>
          <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
            Prize: <span className="text-md font-semibold">{prizes}</span>
          </p>
          <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
            Venue: TBD
          </p>
          <a
            href={`http://localhost:5174/#/event/event-details/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm text-[#17160e] font-medium text-center bg-[#dad3a5] rounded-lg  focus:ring-2 focus:outline-nonehover:shadow focus:ring-[#17160e]"
          >
            View More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default EventsList;
