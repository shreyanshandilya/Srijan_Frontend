import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Nav from "../components/Navbar/navbar";
import axios from "axios";

import Footer from "../components/Footer/footer";
import { Carousel } from "flowbite-react";

function Merchandise() {
  const url = "srijan2024.onrender.com/api/purchase";
  const [data, setData] = useState({
    name: "",
    admissionNumber: "",
    mobileNumber: "",
    tshirtSize: "",
    hostel: "",
    roomNumber: "",
  });
  const [img, setImg] = useState("");
  const handleChangeInput = (event) => {
    setData({ ...data, [event.target.name]: [event.target.value] });
  };
  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };
  const handleMerchantSubmit = () => {
    const formData = new FormData();
    formData.append("image", img);
    axios.post(url, { data, formData });
  };
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    // if (open) {
    //   animate(scope.current, { x: 10 }, { duration: 1 });
    // }
    console.log(open);
  };
  return (
    <div className="bg-[#090d06] jusitfy-center items-center mt-0 h-full w-full">
      <Nav />
      <div className="h-[75vh] ">
        <Carousel>
          <img
            src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967522/fotofreaks_iitism_1675676767_3032118946815236599_5457821429_g7qhtw.jpg"
            alt="..."
          />
          <img
            src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967528/fotofreaks_iitism_1675676767_3032118946815244991_5457821429_bih4qi.jpg"
            alt="..."
          />
          <img
            src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967514/fotofreaks_iitism_1675751379_3032744844136248579_5457821429_yrkxry.jpg"
            alt="..."
          />
          <img
            src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967509/fotofreaks_iitism_1675676767_3032118946798465237_5457821429_qldckp.jpg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center flex flex-col sm:flex-row justify-center items-center lg:py-16">
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ duration: 1 }}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl ">
            Merchandise
          </h1>

          <div className="flex flex-col space-y-4 my-10 sm:flex-row sm:justify-center sm:space-y-0">
            <motion.div
              whileHover={{ y: -10 }}
              className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer"
              onClick={handleClick}
            >
              {open ? "Close" : "Buy!"}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
        {open && (
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-sm mx-auto rounded-lg bg-[#dad3a5] shadow-xl px-5 py-5 backdrop-blur-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Name
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="admission"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Admission Number
              </label>
              <input
                type="text"
                id="admission"
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="23je0001"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="8224092815"
                required
              />
            </div>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="mb-1">
                <label
                  htmlFor="hostel"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Hostel
                </label>
                <input
                  type="text"
                  id="hostel"
                  onChange={handleChangeInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Aquamarine"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="room"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Room
                </label>
                <input
                  type="text"
                  id="room"
                  onChange={handleChangeInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="C/04/09"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select your size
              </label>
              <select
                id="countries"
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="max-w-lg mx-auto mb-2">
              <label
                className="block mb-2 text-sm font-medium text-[#040d10]"
                htmlFor="user_avatar"
              >
                Upload transaction
              </label>
              <input
                onChange={handleImg}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="user_avatar_help"
                placeholder="Transaction Screenshot"
                id="user_avatar"
                type="file"
              />
              <div
                className="mt-1 text-xs flex justify-start text-[#040d10]"
                id="user_avatar_help"
              >
                Screenshot of your payment
              </div>
            </div>

            <button
              type="submit"
              onSubmit={handleMerchantSubmit}
              className="text-[#efede0] bg-[#514c08]/60 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </motion.form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Merchandise;
