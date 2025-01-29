import React, { useEffect } from 'react'
import { FaHeart,FaEnvelope, FaPhone,FaLinkedinIn, FaGithub, FaMapMarkerAlt,FaWhatsapp  } from "react-icons/fa"; 
import document1 from "./images/myCv.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
      AOS.init();
    }, []);
   
  return (
    <div id='contact'>
      <div id="footer"
       data-aos="fade-up"
       data-aos-easing="ease"
      data-aos-duration="1000"
      >
  <div className="container" id="container">
    <div className="row" id="row">
      <div className="footer-section contact"
       data-aos="fade-right"
       data-aos-easing="ease"
      data-aos-duration="1000"
      >
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
      <div className="footer-section location"
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
      <div className="footer-section services" 
       data-aos="fade-left"
       data-aos-easing="ease"
      data-aos-duration="1000"
      >
        <h2 className="footer-heading">Services</h2>
        <ul className="footer-ul">
          <li className="footer-li">Front-End Development</li>
          <li className="footer-li">Web Hosting</li>
          <li className="footer-li">Website Maintenance</li>
        </ul>
      </div>
    </div>

    <div class="copyrite"
     data-aos="fade-in"
     data-aos-easing="ease"
    data-aos-duration="1000"
    >
        <p>  &copy;(2024) <a href="PrivilsWebDev.co.za">PrivilsWebDev</a> . All rights reserved<FaHeart className='footericon'/></p>
    </div>

  </div>
</div>

        
    </div>
  )
}

export default Footer
