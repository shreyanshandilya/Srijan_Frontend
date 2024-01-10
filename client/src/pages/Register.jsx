import React from "react";
import { CollegeRegister } from "./CollegeRegister";
import { OutsideRegister } from "./OutsideRegister";
import { useState } from "react";
import Navbar from "../components/Navbar/navbar";

export const Register = () => {
  const [currentForm, setCurrentForm] = useState("CollegeSignup");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-2 items-center h-screen">
        {currentForm === "OutsideSignup" ? (
          <OutsideRegister onFormSwitch={toggleForm} />
        ) : (
          <CollegeRegister onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
};