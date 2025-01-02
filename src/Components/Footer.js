import React from 'react'
import { FaHeart,FaEnvelope, FaPhone,FaLinkedinIn, FaGithub, FaMapMarkerAlt,FaWhatsapp  } from "react-icons/fa"; 
import document1 from "./images/myCv.pdf";

const Footer = () => {
  return (
    <div>
      <div id="footer">
  <div className="container" id="container">
    <div className="row" id="row">
      {/* Contact Section */}
      <div className="footer-section contact">
        <h2 className="footer-heading">Contact Me</h2>
        <p>
          <FaEnvelope className="leftIcon" />
          contact@privilswebdev.co.za
        </p>
        <p>
          <FaPhone className="leftIcon" />
          0659165816
        </p>
        <p>
          <FaWhatsapp className="leftIcon" />
          0659165816
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/priviledge-black-15b928291">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Privils">
            <FaGithub />
          </a>
        </div>
        <a href={document1} download className="btn btn2">
          Download CV
        </a>
      </div>

      {/* Location Section */}
      <div className="footer-section location">
        <h2 className="footer-heading">Location</h2>
        <p>
          <FaMapMarkerAlt className="leftIcon" />
          Johannesburg, South Africa
        </p>
      </div>

      {/* Services Section */}
      <div className="footer-section services">
        <h2 className="footer-heading">Services</h2>
        <ul className="footer-ul">
          <li className="footer-li">Front-End Development</li>
          <li className="footer-li">UI/UX Design</li>
          <li className="footer-li">Website Maintenance</li>
        </ul>
      </div>
    </div>

    <div class="copyrite">
        <p>  &copy;(2024) <a href="PrivilsWebDev.co.za">PrivilsWebDev</a> . All rights reserved<FaHeart className='footericon'/></p>
    </div>

  </div>
</div>

        
    </div>
  )
}

export default Footer
