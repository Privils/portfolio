import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
      <footer className="footer">
        <div className="footerContent">
          <div id="container">
            <div
              className="footer-section services"
              data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-ul">
                <li className="footer-li">Front-End Development</li>
                <li className="footer-li">Web Hosting</li>
                <li className="footer-li">Website Maintenance</li>
                <li>Business Email Setup</li>
                <li>Help with setting up Google Business Accounts</li>
              </ul>
            </div>
            <div
              className="footer-section location"
              data-aos="fade-down"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <h2 className="footer-heading">Location</h2>
              <p>
                <FaMapMarkerAlt className="leftIcon" />
                Cape Town, South Africa
              </p>
            </div>
          </div>

          <div className="row" id="row" 
           data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              >
            <h1 className="footer-heading">get in touch</h1>

            <form action="" id="form">
              <label For="name">name</label>
              <input type="text" id="name" />
              <label htmlFor="surname">surname</label>
              <input type="text" id="surname" />
              <label htmlFor="email">email</label>
              <input type="text" id="emil" />
              <label htmlFor="message">enter message</label>
              <textarea
                name="enter your emaail"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="social-icons"
               data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration="1000">
                <a href="https://www.linkedin.com/in/priviledge-black-15b928291">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Privils">
                  <FaGithub />
                </a>
              </div>
              <div className="btn-container"
               data-aos="fade-right"
              data-aos-easing="ease"
              data-aos-duration="1000">
                <a
                  href={require("./images/myCv.pdf")}
                  download
                  className="btn btn2"
                >
                  Download CV
                </a>
              </div>
            </form>
          </div>
        </div>
        <div
          class="copyrite"
          data-aos="fade-in"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <p>
            {" "}
            &copy;(2024) <a href="#">PrivilsWebDev</a> . All rights reserved
            <FaHeart className="footericon" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
