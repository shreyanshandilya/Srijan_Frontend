import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Navbar from "../components/Navbar/navbar";

function Profile() {
  const [details, setDetails] = useState([]);
  const url = "https://srijan2024.onrender.com/api/getUser";
  const fetchUser = useCallback(async () => {
    await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setDetails(data);
        // console.log(ans);
        // console.log(res.json());
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <div className="bg-[#17160e]">
        <Navbar />
        <div className="p-16">
          <div className="p-8 bg-[#dad3a5] shadow mt-24">
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-6xl font-semibold text-[#0d0c06]">
                {details.Name}{" "}
                {/* <span className="font-light text-gray-500">{details.Email}</span> */}
              </h1>
              <p className="font-light text-[#0d0c06] mt-5 flex justify-center items-center gap-x-2 text-xl italic">
                <IoMdMail className="text-2xl" />
                {details.Email}
              </p>
              <p className="font-light text-[#0d0c06] my-5 flex justify-center items-center gap-x-2 text-xl">
                <FaPhone className="text-xl" />
                {details.PhoneNumber}
              </p>
              <Link to="/">
                <button
                  className="text-[#0d0c06] text-xl mt-4 py-3 px-6 uppercase  bg-[#c9bc57]/80 hover:bg-[#c9bc57] shadow hover:shadow-lg font-medium transition  rounded-xl transform hover:-translate-y-0.5"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Logout
                </button>
              </Link>

              {/* <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p> */}
            </div>

            <div className="mt-12 flex flex-col justify-center">
              {/* <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button> */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {details.Merchandise!=undefined&&details.Merchandise.length>0&&details.Merchandise.map((item, index) => {
                  return (
                    <>
                      <div className="max-w-sm p-6 bg-[#3c3708] border border-gray-200 rounded-lg shadow">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold flex justify-center tracking-tight text-[#dad3a5]">
                            {`Order${index + 1}`}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-[#efede0]">
                          Address: {item.address}
                        </p>
                        <p className="mb-3 font-normal text-[#efede0]">
                          T-Shirt Size: {item.tshirtSize}
                        </p>
                        <p className="mb-3 font-normal text-[#efede0]">
                          Quantity: {item.quantity}
                        </p>
                        <a
                          className={`${
                            item.approved ? `bg-[#fbe10e]` : `bg-[#fbe10e]/70`
                          } inline-flex items-center bg-[#fbe10e]/70 px-3 py-2 text-sm font-medium text-center text-[#17160e] rounded-lg focus:outline-none`}
                        >
                          {item.approved ? `Approved` : `Not Approved`}
                          {/* <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg> */}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
