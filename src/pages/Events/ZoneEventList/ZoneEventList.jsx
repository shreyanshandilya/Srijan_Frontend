import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/navbar";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import img from "../../../assets/Desktop.jpg";
import "./Events.css";
import axios from "axios";
// import EventCard from "../Events/EventsCard";
 
import bg from "../../../assets/Images_for_events/slanted-gradient.png";
import EventsArr from "./Database/SrijanEvents";
import Event_card from "./Event_card";

function Event(props) {
  console.log(EventsArr);
  // const [open, setOpen] = useState(false);
  // const [open2, setOpen2] = useState(false);
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [clubEvents, setClubEvents] = useState([]);
  const [deptEvents, setDeptEvents] = useState([]);
  const allEventsUrl = "https://srijan2024.onrender.com/api/showAllEvents";

  const fetchAllEvents = useCallback(async () => {
    var clubEvents = [],
      deptEvents = [];
    // const res = await fetch(allEvents);
    const res = await axios.get(allEventsUrl);
    // .then((res) => {
    //   allEvents = res.data;
    //   clubEvents = allEvents.filter((event) => {
    //     return event.type == 1;
    //   });
    //   deptEvents = allEvents.filter((event) => {
    //     return event.type == 2;
    //   });
    // });
    res.data.map((obj) => {
      if (obj.type == 1) clubEvents.push(obj);
      if (obj.type == 2) deptEvents.push(obj);
    });
    // console.log(allEvents);
    setAllEvents(res.data);
    setClubEvents(clubEvents);
    setDeptEvents(deptEvents);
    setEvents(res.data);
  }, [allEventsUrl]);
  // console.log(events);

  // console.log(allEvents);
  // console.log(localStorage.geItem("clubEvents"));
  // console.log(localStorage.geItem("deptEvents"));
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
    fetchAllEvents();
  }, [fetchAllEvents]);
  // console.log(events);
  const handleAllEvents = () => {
    setEvents(allEvents);
    // console.log("hello all events");
    // console.log(allEvents);
    // console.log(events);
  };
  const handleClubEvents = () => {
    setEvents(clubEvents);
    // setEvents(localStorage.getItem("clubEvents"));
    // console.log("hello club events");
    // console.log(clubEvents);
  };
  const handleDeptEvents = () => {
    setEvents(deptEvents);
    // setEvents(localStorage.getItem("deptEvents"));
    // console.log("hello dept events");
    // console.log(deptEvents);
  };
  // const category = props.match.params;
  const { category } = useParams();
  const finalCategoryEvents = EventsArr.filter((obj) => {
    return obj.Zone.toLowerCase() == category;
  });
  console.log(finalCategoryEvents);
  return (
    <div
      className="bg-black h-screen  overflow-y-scroll bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})`, objectFit: "cover" }}
    >
      <Navbar />
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" flex justify-center h-[40vh] items-center  text-4xl md:text-6xl font-bold text-[#efede0] gradient"
      >
        Events
      </motion.div>
      <div className="flex justify-center gap-11 items-center mb-10">
        <button
          onClick={handleAllEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          All
        </button>
        <button
          onClick={handleClubEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Club
        </button>
        <button
          onClick={handleDeptEvents}
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Department
        </button>
      </div> */}
      {/* <EventCard event={events} /> */}

      {/* <h1 className="py-48 h-96 gradient flex justify-center text-4xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
        Coming Soon
      </h1> */}
      {/* <div>
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>

                  <g id="SVGRepo_iconCarrier">
                    <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"></path>
                  </g>
                </svg>
                <strong>Hover Me</strong>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>

              <div className="front-content">
                <small className="badge">Pasta</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Spaguetti Bolognese</strong>
                    </p>
                    <svg
                      fillRule="nonzero"
                      height="15px"
                      width="15px"
                      viewBox="0,0,256,256"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        // style={{ mix-blend-mode: 'normal' }}
                        textAnchor="none"
                        fontSize="none"
                        fontWeight="none"
                        fontFamily="none"
                        strokeDashoffset="0"
                        strokeDasharray=""
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                        strokeWidth="1"
                        stroke="none"
                        fillRule="nonzero"
                        fill="#20c997"
                      >
                        <g transform="scale(8,8)">
                          <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="card-footer">
                    30 Mins &nbsp; | &nbsp; 1 Serving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="h-screen w-screen flex justify-center items-center">
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Something Awesome</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              culpa.
            </p>
            <a href="#" className="button">
              Learn More
            </a>
          </div>
        </div>
      </div> */}
      <h2 className="text-5xl font-bold text-[#dad3a5] mt-[135px]">
        {category.toUpperCase()} Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 mt-[100px] mb-10">
        {finalCategoryEvents.map((event, index) => {
          // console.log(event);
          return (
            <div className="flex justify-center items-center">
              <Event_card key={index} event={event} />
            </div>
          );
        })}
      </div>

      {/* <div cla)ssName="grid grid-cols-2 gap-y-[150px]"> */}
      {/* <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29] my-[40px] mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="">
            <motion.h5
              layout="position"
              className="mb-2 p-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="px-4 pb-3"
              >
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29] my-[40px]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open2 && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-2 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div> */}
      {/* 
      </div> */}
      {/* <motion.div
          whileHover={{ scale: 1.08 }}
          layout
          onClick={() => setOpen(!open)}
          className="max-w-sm bg-[#17160e] hover:bg-[#544f29]  mx-auto rounded-lg shadow"
        >
          <motion.div layout className="">
            <img
              className="rounded-t-lg h-[40vh] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div className="p-5">
            <motion.h5
              layout="position"
              className="mb-2 font-bold tracking-tight text-center text-xl text-[#dad3a5]"
            >
              event Name
            </motion.h5>
            {open && (
              <motion.div layout>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0]">
                  Organized by:{" "}
                  <span className="text-md font-semibold"> CSE</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Prize: <span className="text-md font-semibold">30k INR</span>
                </p>
                <p className="mb-3 font-normal text-sm my-5 text-[#efede0] ">
                  Venue: TBD
                </p>
                <Link to={`/event/event-details/`}>
                  <a
                    // href={`https://srijanweb.onrender.com/#/event/event-details/${_id}`}
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
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div> */}
     
    </div>
  );
}

export default Event;
