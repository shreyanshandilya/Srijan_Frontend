import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar/navbar";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleEmailChange = (event) => {
  //   // setData({ ...data, [event.target.id]: event.target.value });

  // };

  // const handlePasswordChange = (event) => {
  //   setData(event.target.value);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      Email: email,
      Password: password,
    };
    console.log(data);
    const response = await toast.promise(fetch("https://srija/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data),
    }),
       {
         position: toast.POSITION.BOTTOM_RIGHT,
         pending: 'Loading',
         
         error: 'Invalid credentials'
       })
    
    const abcd = await response.json();
    console.log(abcd);
   if(abcd.Token!=undefined){ localStorage["token"] = abcd.Token;
    localStorage["email"] = data.Email;}
    if (abcd.Token) {
      toast.success("Login Successful !!!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Invalid credential", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
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
          onSubmit={handleSubmit}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="Password"
              label="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
}

export default Login;
