// Footer.js
import React from "react";
import "./footer.css";
import logo from "./srijan Light (1).png";
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img src={logo} width="150px" />
          </span>{" "}
          2024
        </h3>
        <a
          href="https://drive.google.com/file/d/1XWCCAvG8_vHOTChQzw3sT0nUJuZRuPog/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            whileHover={{ y: -5 }}
            type="button"
            className=" bg-opacity-10 backdrop-blur-lg hover:bg-[#dad3a5] font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#c9bc57] hover:text-[#090d06] me-2 mb-2"
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
              Srijan Brochure
            </p>
          </button>
        </a>
        <p className="footer-links text-[#ffffff] hover:text-yellow-400">
          <a href="#" className="link-1">
            Home
          </a>
          {"\t"}
          <a href="#">Events </a>
          {"\t"} <a href="#">Merchandise </a>
          {"\t"} <a href="#">Teams </a>
          {"\t"}
          <a href="#">Contact </a>
        </p>
        <p className="footer-company-name">
          Cultural Center
          <br />
          Biggest socio-cultural fest of eastern India <br /> 2nd to 4th
          February, 2024
        </p>
      </div>

      <div className="footer-center">
        <div>
          <p className="md:pl-4 ">
            If you have any questions or need help <br /> feel free to contact
            with our team.
          </p>
        </div>

        <div>
          <p>
            <a href="mailto : srijan@iitism.ac.in">
              <i className="fa-sharp fa-solid fa-envelope"></i>{" "}
              srijan@iitism.ac.in{" "}
            </a>
          </p>
        </div>
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            Indian Institute of Technology (ISM) <br />
            Dhanbad - 826004, Jharkhand, India
          </p>
        </div>
      </div>

      <div className="footer-right">
        <div className="col-nav"> Sponsorship</div>

        <p className="spons-mail">
          {" "}
          <a href="mailto : sponsorship.srijan@iitism.ac.in">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            sponsorship.srijan@iitism.ac.in
          </a>
        </p>
        <p className="footer-company-about">
          <div className="col-nav">Connect</div>
        </p>

        <div className="footer-icons justify-center md:justify-between">
          <a href="https://www.facebook.com/ism.srijan" >
            <i className="fa fa-facebook"></i>
          </a>

          <a href="https://www.linkedin.com/company/srijaniitismdhn/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/srijaniitism/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
