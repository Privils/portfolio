import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [greeting, setGreeting] = useState('');
  const popupRef = useRef(null);



  const form = useRef();
  const serviceKey = process.env.REACT_APP_SERVICES_KEY;
  const apiKey = process.env.REACT_APP_API_KEY;
  const tempId = process.env.REACT_APP_TEMPLATE_ID;



 
  const contactForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    emailjs.sendForm(serviceKey, tempId, form.current, apiKey).then(
      () => {
        alert("message sent succefully");
      },
      (error) => {
        console.log(error);
        alert("Failed to send message");
      }
    );
        setGreeting(`Hello, ${formData.name}! <br> your message has been send`);
    setShowPopup(true);
     setFormData({ name: '', surname: '', email: '', message: '' });
  
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
   const handleClickOutside = (e) => {
    if (popupRef.current && e.target === popupRef.current) {
      setShowPopup(false);
    }
  }
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
              <h2 className="footer-heading">location</h2>
              <p>
                <FaMapMarkerAlt className="leftIcon" />
                Cape Town, South Africa
              </p>
            </div>
            <div
              className="footer-section location"
              data-aos="fade-down"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <h2 className="footer-heading">hire me</h2>

              <div
                className="btn-container"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <a
                  href={require("./images/myCv.pdf")}
                  download
                  className="btn btn2"
                >
                  Download CV
                </a>
              </div>
              <div
                className="social-icons"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <a href="https://www.linkedin.com/in/priviledge-black-15b928291">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Privils">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div
            className="row"
            id="row"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <h1 className="footer-heading">get in touch</h1>

            <form id="form" ref={form} onSubmit={contactForm}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="surname">surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
              <label htmlFor="email">email</label>
              <input
                type="text"
                id="emil"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">enter message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="btn-container">
                <button className="btn btn2" type="submit">
                  Submit
                </button>
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
         {showPopup && (
        <div className="popup-overlay" ref={popupRef}>
          <div className="popup-content">
            <p dangerouslySetInnerHTML={{ __html: greeting }} />
            <button onClick={() => setShowPopup(false)} className="btn btn2">Close</button>
          </div>
        </div>
      )}
      </footer>
    </div>
  );
};

export default Footer;
