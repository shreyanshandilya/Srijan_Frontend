import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar/navbar";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleEmailChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setData(event.target.value);
  };
  const onSubmit = (event) => {};
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-[#0d0c06] justify-center items-center w-screen h-screen">
        <motion.h1
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#dad3a5] pt-10 text-5xl font-semibold flex justify-center items-center"
        >
          Login
        </motion.h1>
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
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="xyz@gmail.com"
              label="Email"
              name="email"
              value={data.email}
              onChange={handleEmailChange}
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
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="Password"
              label="Password"
              name="password"
              value={data.password}
              onChange={handlePasswordChange}
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
    </>
  );
}

export default Login;
