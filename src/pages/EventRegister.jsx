import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import imagee from "../assets/bgimage.jpg";

export const EventRegister = () => {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  const url = "#";
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    tshirtSize: "",

    address: "",
    quantity: "",
    outsider: false,
  });
  const [img, setImg] = useState("");

  const [outside, setOutside] = useState(false);
  const handleChangeInput = (event) => {
    setData({ ...data, [event.target.id]: [event.target.value] });
    // console.log(data);
  };
  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };
  const handleMerchantSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white grid grid-cols-2">
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + imagee + ")" }}
        >
      </div>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={(e) => handleMerchantSubmit(e)}
        className="w-full mx-auto rounded-lg bg-[#dad3a5] shadow-xl px-5 py-5 backdrop-blur-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChangeInput}
            value={data.name}
            className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            placeholder="ABC XYZ"
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
            type="text"
            id="email"
            onChange={handleChangeInput}
            value={data.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Phone
          </label>
          <input
            type="text"
            id="mobileNumber"
            maxLength="10"
            onChange={handleChangeInput}
            value={data.mobileNumber}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            placeholder="8224092815"
            required
          />
        </div>
        <div className="justify-center items-center mb-4">
          {/* <div className="mb-1">
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
                  value={data.hostel}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="Aquamarine"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="roomNumber"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Room
                </label>
                <input
                  type="text"
                  id="roomNumber"
                  onChange={handleChangeInput}
                  value={data.roomNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="C/06/09"
                  required
                />
              </div> */}
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Address
          </label>
          <input
            type="string"
            id="address"
            onChange={handleChangeInput}
            value={data.address}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            placeholder="Jhon doe ,123 Main Street ,Mumbai ,Maharashtra 400001"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-[#040d10]"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            onChange={handleChangeInput}
            value={data.quantity}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            placeholder="Eg. 1, 2, 3..."
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tshirtSize"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select your size
          </label>
          <select
            id="tshirtSize"
            onChange={handleChangeInput}
            value={data.tshirtSize}
            placeholder="M"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
            required
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        {/* <div className="mb-1">
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
                  value={data.hostel}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="Aquamarine"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="roomNumber"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Room
                </label>
                <input
                  type="text"
                  id="roomNumber"
                  onChange={handleChangeInput}
                  value={data.roomNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="C/06/09"
                  required
                />
              </div> */}
        <div className="flex mb-4" style={{ alignItems: "flex-start" }}>
          <input
            type="checkbox"
            onClick={() => {
              setOutside(!outside);
            }}
            style={{
              margin: "4px",
              color: "#020508",
              backgroundColor: "#020508",
            }}
          />{" "}
          <label className="block mb-2 text-sm font-medium text-[#040d10]">
            Delivery outside IIT ISM (Rs. 50 delivery charges)
          </label>
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
            required
          />
          <div
            className="mt-1 text-xs flex justify-start text-[#040d10]"
            id="user_avatar_help"
          >
            Screenshot of your payment
          </div>
          <div>
            Payable Amount:{" "}
            {outside ? 399 * data.quantity + 50 : 399 * data.quantity}
          </div>
        </div>

        <button
          type="submit"
          className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};
