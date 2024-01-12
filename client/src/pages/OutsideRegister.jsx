import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const OutsideRegister = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [re_pass, setRe_pass] = useState("");
  const [phno, setPhno] = useState("");
  const [showToast, setToast] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [otpInput, setOtpInput] = React.useState("");

  const handleSubmit = async () => {
    const body = {
      Email: email,
      Name: name,
      PhoneNumber: phno,
      IsISM: false,
      Password: pass,
    };
    const response = await toast.promise(
      fetch("https://srijan2024.onrender.com/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(body),
    }),
       {
         position: toast.POSITION.BOTTOM_RIGHT,
         pending: 'Loading',
          
         error: 'User already exist or invalid credentials'
       })
      
     
    const abcd = await response.json();
    if (abcd.status) {
      toast.success(abcd.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error(abcd.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    if (abcd.status === "success") setShowOtpBox(true), setEmail2(abcd.Email);
    console.log(abcd);
  };
  const otpRequest = async (e) => {
    e.preventDefault();
    const body = {
      Email: email2,
      otp: otpInput,
    };
    try {
      const response = await toast.promise(
        fetch(
          "https://srijan2024.onrender.com/api/signup/verify",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify(body),
          }),
         {
           position: toast.POSITION.BOTTOM_RIGHT,
           pending: 'Loading',
           success: 'User Created',
           error: 'Invalid or expired OTP'
         })
        
      const abcd = await response.json();
      console.log(abcd);
      setShowOtpBox(false);
      localStorage["token"] = abcd.token;
      localStorage["email"] = abcd.user.Email;
      if (abcd.token) {
        toast.success(abcd.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => {
          navigate("/merchant");
        }, 1000);
      } else {
        toast.error(abcd.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


  const submitBtn = async (e) => {
    e.preventDefault();
    await handleSubmit();
  };

  return (
    <div className="rounded-lg max-w-screen h-screen">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center p-4 text-[#dad3a5] font-semibold text-4xl"
      >
        Outside Signup
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-auto px-40 h-auto">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="cursor-pointer py-4 w-[240px] flex justify-center bg-[#544b08] focus:border-2 focues:border-[#efede0] text-[#efede0] rounded-lg px-4"
          onClick={() => props.onFormSwitch("CollegeSignup")}
        >
          Go to college signup
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-sm mt-5 mx-auto rounded-lg bg-[#dad3a5] flex-col justify-center shadow-xl px-5 py-5 backdrop-blur-lg"
        >
          <motion.form onSubmit={submitBtn}>
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
            <div className="flex justify-center items-center gap-4">
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
                  value={re_pass}
                  onChange={(e) => setRe_pass(e.target.value)}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  required
                />
              </div>
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
                type="text"
                placeholder="983XXXXX02"
                id="phNo"
                name="phNo"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto my-2 px-5 py-2.5 text-center "
            >
              Submit
            </motion.button>
          </motion.form>
          {showOtpBox && (
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-sm mt-5 mx-auto rounded-lg bg-[#dad3a5] flex-col justify-center shadow-xl p-4 backdrop-blur-lg"
              onSubmit={otpRequest}
            >
              <div>OTP is sent to your email !!!</div>
              <div className="my-2">
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm font-medium text-[#040d10]"
                >
                  OTP
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  type="text"
                  placeholder="XXYY"
                  id="otp"
                  name="otp"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  type="submit"
                  className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center "
                >
                  Verify
                </motion.button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </motion.div>
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
