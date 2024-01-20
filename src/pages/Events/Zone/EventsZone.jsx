// CardContainer.js

import React from "react";
import Card from "./Zonner_cards"; // Create a Card component if not already created
import Navbar from "../../../components/Navbar/navbar";
import { motion } from "framer-motion";
import img from "../../../assets/Images_for_events/bgg.png";
import { ToastContainer, toast } from "react-toastify";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cardsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


const CardContainer = () => {

  const navigate = useNavigate();

  const url = "https://srijan-prod.onrender.com/api/getUser";
  const fetchUser = useCallback(async () => {
    const response = await toast
      .promise(
        fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }),
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          pending: "Checking your Event Access !!",
          error: "Something wrong occured",
        }
      )
      .then(async (res) => {
        const data = await res.json();
        console.log(data.IsEvents);
        if(data.IsEvents === true){
          navigate('/packages');
        }
        // if()
        // console.log(ans);
        // console.log(res.json());
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div
      className="bg-cover bg-center bg-fixed w-screen max-w-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      <div
        className="p-5"
        style={{
          borderRadius: " 7px",

          marginTop: "5rem",
          backdropFilter: "blur(0.25px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-[10px] items-center text-4xl md:text-6xl font-bold text-[#eab235]"
        >
          Events
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center">
          {cardsData.map((card, index) => (
            <Card index={index} />
          ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CardContainer;
