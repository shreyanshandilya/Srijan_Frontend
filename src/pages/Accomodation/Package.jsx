import React from "react";
import CardComponent from "./card";
import Navbar from "../../components/Navbar/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PackagePage = () => {
  const navigate = useNavigate();
  // Define an array of packages with their titles and eligible things
  useEffect(() => {
    if (localStorage.token != null && localStorage.token != undefined) {
      if (localStorage.email.endsWith("@iitism.ac.in")) {
      } else {
        navigate("/");
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
