import React from "react";
import { CollegeRegister } from "./CollegeRegister";
import { OutsideRegister } from "./OutsideRegister";
import { useState } from "react";

export const Register = () => {
  const [currentForm, setCurrentForm] = useState("CollegeSignup");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
      {currentForm === "OutsideSignup" ? (
        <OutsideRegister onFormSwitch={toggleForm} />
      ) : (
        <CollegeRegister onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
