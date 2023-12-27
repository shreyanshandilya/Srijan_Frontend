// Footer.js
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <span>SRIJAN</span> 2024
        </h3>

        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>
          {"\t"}
          <a href="#">Events </a>
          {"\t"} <a href="#">Merchandise </a>
          {"\t"} <a href="#">Teams </a>
          {"\t"}
          <a href="#">Contact </a>
        </p>
        <p class="footer-company-name">
          Cultural Center
          <br />
          Biggest socio-cultural fest of eastern India 2nd to 4th February, 2024
        </p>
      </div>

      <div class="footer-center">
        <div>
          <p>
            If you have any questions or need help <br /> feel free to contact
            with our team.
          </p>
        </div>

        <div>
          <p>
            <a href="mailto : srijan@iitism.ac.in">
              <i class="fa-sharp fa-solid fa-envelope"></i> srijan@iitism.ac.in{" "}
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

        <div class="footer-icons">
          <a href="https://www.facebook.com/ism.srijan">
            <i class="fa fa-facebook"></i>
          </a>

          <a href="https://www.linkedin.com/company/srijaniitismdhn/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/srijaniitism/">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
