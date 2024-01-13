import React, { useState,useEffect,useNavigate } from "react";

import axios from 'axios';

function Merchandise2() {
  
  const [img, setImg] = useState("");
  const [formData, setFormData] = React.useState({
    tshirtSize: "",
    address: "",
    quantity: "",
  });

  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };

  function handleChange(event) {
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, img);
    let response;
    try {
      let token_user = localStorage.getItem("token");
      response = await axios.post(
        "http://srijan2024.onrender.com/api/purchase",
        {
          ...formData,
          image: img,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token_user,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error occured please try again later ");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
    console.log(response);
  }

  return (
    <form className="mt-8" method="POST" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label
            htmlFor="tshirtSize"
            className="text-base font-medium text-gray-900"
          >
            TshirtSize
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Size"
              onChange={handleChange}
              id="tshirtSize"
              name="tshirtSize"
              value={formData.tshirtSize}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="text-base font-medium text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Address"
              onChange={handleChange}
              name="address"
              id="address"
              value={formData.address}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900"
            >
              Quantity
            </label>
          </div>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="quantity"
              placeholder="quantity"
              onChange={handleChange}
              id="quantity"
              name="quantity"
              value={formData.quantity}
            />
          </div>
        </div>
        <div>
          <label htmlFor="user_avatar">Upload transaction</label>
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
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Buy
          </button>
        </div>
      </div>
    </form>
  );
}

export default Merchandise2;
