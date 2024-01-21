import React, { useState } from "react";
import CardComponent from "./card";
import Navbar from "../../components/Navbar/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "flowbite-react";


const PackagePage = (props) => {
  const navigate = useNavigate();
  let { msg } = useParams();
  const [openModal, setOpenModal] = useState(msg);
  // console.log(msg);
  // Define an array of packages with their titles and eligible things
  useEffect(() => {
    if (localStorage.token != null && localStorage.token != undefined) {
      if (localStorage.email.endsWith("@iitism.ac.in")) {
        navigate("/");
      } else {
      }
    }
  });
  const packages = [
    {
      title: "Platinum",
      eligibleThings: ["Accommodation", "Merchandise", "Pro Nights", "Events"],
    },
    {
      title: "Gold",
      eligibleThings: ["Accommodation", "Merchandise", "Events"],
    },
    {
      title: "Silver",
      eligibleThings: ["Accommodation", "Events"],
    },
    {
      title: "Bronze",
      eligibleThings: ["Pronites", "Events"],
    },
    // Add more packages as needed
  ];

  return (
    <div
      className=""
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)",
      }}
    >
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sm:w-screen"
      >
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Package Details</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                To register for the events, user outside campus have to
                subscribe particular "Packs" that satisfies their interest.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                You can view your subscribed packs and merchs in profile
                section. You can email srijan@iitism.ac.in for your further
                query.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
          </Modal.Footer>
        </Modal>
      </motion.div>
      <div className="mt-[100px] min-h-[100vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-[10px] items-center text-3xl md:text-6xl font-bold text-[#bab9b7]"
        >
          PACKAGES <hr />
        </motion.div>
        <div
          className="py-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-6
}"
          style={{
            alignContent: "center",
            borderRadius: " 7px",

            marginTop: "5rem",
            backdropFilter: "blur(0.25px)",
          }}
        >
          {packages.map((packageItem, index) => (
            <CardComponent
              title={packageItem.title}
              eligibleThings={packageItem.eligibleThings}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagePage;
