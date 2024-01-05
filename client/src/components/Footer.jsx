import React from "react";
import srijanlogo from "./Footer/srijan Light (3).png";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterT() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex-col justify-center">
        <div className="md:flex md:justify-between justify-center">
          <div className="mb-6 md:mb-0 flex-col justify-center items-center">
            <a href="/" className="flex items-center justify-center">
              <img src={srijanlogo} className="md:h-20 h-[50px] me-3" alt="#" />
            </a>
            <div className="text-[#efede0] font-medium text-sm md:text-base py-5 px-10 md:pr-10 flex justify-center items-center text-center">
              Biggest socio-cultural fest of Eastern India 2nd to 4th February,
              2024
            </div>
            <a
              href="https://drive.google.com/file/d/1XWCCAvG8_vHOTChQzw3sT0nUJuZRuPog/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <button
                whileHover={{ y: -5 }}
                type="button"
                className="  backdrop-blur-lg bg-[#dad3a5] hover:bg-transparent font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#090d06] hover:text-[#c9bc57] me-2 my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                </svg>
                <p className="p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                  Sponsorship Brochure
                </p>
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 text-[#efede0]">
              <div className=" flex-col justify-center gap-y-3">
                <div>For any queries:</div>
                <ul className="font-medium flex-col gap-y-6">
                  <li className="my-4">
                    <a
                      href="https://flowbite.com/"
                      className="hover:underline text-xs sm:text-sm md:text-base text-[#fbe10e] flex items-center justify-start gap-x-2 sm:gap-x-4"
                    >
                      <IoMdMail className="text-[#dad3a5] text-xl sm:text-2xl" />
                      srijan@iitism.ac.in
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com/"
                      className="hover:underline text-xs sm:text-sm md:text-base flex items-center justify-start gap-x-2 sm:gap-x-4"
                    >
                      <FaMapMarkerAlt className="text-[#dad3a5] text-5xl sm:text-4xl" />
                      Indian Institute of Technology (ISM) Dhanbad - 826004,
                      Jharkhand, India
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/event" className="hover:underline">
                      Events
                    </Link>
                  </li>
                  {/* <li className="mb-4">
                  <Link
                    to="/merchant"
                    className="hover:underline"
                  >
                    Merchandise
                  </Link>
                </li> */}
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="hover:underline">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-[#dad3a5]">
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-3xl gap-x-5">
            <a
              href="https://www.facebook.com/ism.srijan"
              className=" hover:text-[#c9bc57]"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/srijaniitism/"
              className=" hover:text-[#c9bc57] ms-5"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/srijaniitismdhn/"
              className=" hover:text-[#c9bc57] ms-5"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterT;
