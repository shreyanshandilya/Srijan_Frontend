import React, { useState } from "react";
import { motion } from "framer-motion";

export const CollegeRegister = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [re_pass, setRe_pass] = useState("");
  const [phno, setPhno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="bg-[#dad3a5] p-6 rounded-lg">
      <div
        className="cursor-pointer py-4 bg-red-300 flex justify-center border-blue-200 border-4 text-red-700"
        onClick={() => props.onFormSwitch("OutsideSignup")}
      >
        Go to Outside college
      </div>
      <div className="text-center p-4 text-[#040d10] font-bold text-2xl">
        CollegeSignup
      </div>
      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        onSubmit={(e) => onSubmit(e)}
        className="max-w-sm mt-[40px] mx-auto rounded-lg bg-[#dad3a5] flex-col justify-center shadow-xl px-5 py-5 backdrop-blur-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="College Email-id"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Confirm Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phno"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Mobile Number
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            type="number"
            placeholder="Phone Number"
            id="phNo"
            name="phNo"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};
