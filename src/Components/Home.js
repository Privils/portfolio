import React, { useState } from "react";
import {
  FaCrop,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaHeart,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import image1 from "./images/me.jpg";
import image2 from "./images/movie site.png";
import image3 from "./images/ART.png";
import image4 from "./images/rickin.png";
import image5 from './images/food site.png';
import image6 from './images/GAME.png';
import image7 from './images/weather app.png';
import document1 from './images/myCv.pdf' 

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [tab, setTab] = useState("skills");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxNggxheJXnAa_Q53wxpFRPZxg0Gnzgwc4fAsjU7qgmsslYA0dOnf3CReoa0QOy8a8y/exec'
    const form = document.forms['submit-to-google-sheet']
  
    e.preventDefault();
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      console.log("Success!", response);
      form.reset();

      form.classList.add('submitted');
      setTimeout(() => {
        form.classList.remove('submitted');
      }, 1000);
    } catch (error) {
      console.error("Error!", error.message);
    }
  };


  const openTab = (tabName) => {
    setTab(tabName);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

 const thanks = async () => {
  alert('Thank you for trying out my portfolio website')
 }
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src={image1} alt="" className="img" />
            </div>
            <div className="col-2">
              <h1 className="subtitle">about me</h1>
              <p>
                Hi my name is <span id="my-name">priviledge mushure</span> im 20
                years old based in{" "}
                <span id="state">cape town south africa</span>. I am very
                passionate about about a lot of things some which include{" "}
                <span id="emjoyment">
                  art, music, chess, outtings and an un-defeated anime fan but
                  mostly I enjoy coding.Coding is one thing i spend most of my
                  time doing so I can improve my skills little by little after all
                  progress is progress no matter how small
                </span>
              </p>
              <div className="tabtitle">
                <p
                  className={`tab-links ${
                    tab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("skills")}
                >
                  skills
                </p>
                <p
                  className={`tab-links ${
                    tab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("experience")}
                >
                  experience
                </p>
                <p
                  className={`tab-links ${
                    tab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("education")}
                >
                  education
                </p>
              </div>

              <div
                className={`tab-contents ${
                  tab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>fron-end</span>
                    <br />
                    HTML5
                    <br />
                    CSS 3<br />
                    REACT <br />
                    JAVASCRIPT
                  </li>
                  <li>
                    <span>fullStack</span>
                    <br />
                    HTML5
                    <br />
                    CSS 3<br />
                    REACT <br />
                    JAVASCRIPT
                    <br />
                    Node.js <br />
                    Postgres <br />
                    Express.JS <br />
                    <br />
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  tab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>currently</span>
                    <br />
                    study/learning experience 
                  </li>
                </ul>
              </div>

              <div
                className={`tab-contents ${
                  tab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>Nov(2022) - Feb(2024)</span>
                    <br />
                    codecademy
                  </li>
                  <li>
                    <span>Jan(2018) - Dec(2022)</span>
                    <br />
                    Princeton High School
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <h1 className="subtitle">my services</h1>
          <div className="services-list">
            <div>
              <FaCrop className="crop" />
              <h2>fron-end</h2>
              <p>
                Bring your website to life with my front-end development
                expertise. I will use my skills of HTML, CSS,
                and JavaScript to craft interactive and engaging user
                interfaces. Whether you need a dynamic single-page application
                or a fully-functional e-commerce platform, I deliver top-notch
                front-end solutions that exceed your expectations...
              </p>
              <a href="#" onClick={toggleDetails}>
                learn more
              </a>
              {showDetails && (
                <div className="additional-details">
                  <p> I specialize in
                    creating visually captivating and user-friendly websites
                    tailored to your unique brand identity. From responsive
                    layouts to custom graphics, I ensure your website stands out
                    in today's competitive digital landscape. <br />
                    <strong>User Interface (UI) Development</strong>
                    Elevate your user experience with my UI development
                    services. I combine creativity and usability to design
                    intuitive interfaces that captivate and delight your
                    audience.
                  </p>
                </div>
              )}
            </div>

            <div>
              <FaCrop className="crop" />
              <h2>fullStack</h2>
              <p>
                Experience the power of end-to-end web solutions with my
                full-stack development services. From front-end interfaces to
                back-end databases, I will handle every aspect of your project with
                expertise and precision. Whether you need a dynamic web
                application, a robust e-commerce platform, or a custom content
                management system, we have the skills and experience to bring
                your vision to life.
              </p>
              <a href="#" onClick={toggleDetails}>
                learn more
              </a>
              {showDetails && (
                <div className="additional-details">
                  <p> My Full-Stack Web Development
                    knowledge will give you the power of end-to-end web solutions with my
                    full-stack development services. From front-end interfaces
                    to back-end databases, I handle every aspect of your
                    project with expertise and precision. Whether you need a
                    dynamic web application, a robust e-commerce platform, or a
                    custom content management system, I have the skills and to bring your vision to life.
                   <br /><strong>  Custom Web
                    Application Development </strong> Empower your business with custom
                    web applications tailored to your unique needs. I
                    specializes in building scalable and secure
                    web applications that streamline your operations and drive
                    growth. From project management tools to customer portals,
                    I will develop custom solutions that will solve your business
                    challenges and deliver tangible results. <br /><strong>Back-end
                    Development</strong> I will build a strong foundation for your web
                    applications with My back-end development expertise. My
                    skills as a developer architect and server-side solutions
                    will power your applications with speed, security, and
                    scalability. From database design to API development, I
                    ensure seamless integration and reliable performance for
                    your web applications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h1 className="subtitle">my work</h1>
          <div className="work-list">
            <div className="work">
              <img src={image2} alt="" />
              <div className="layer">
                <h3>Movie site</h3>
               {
                /* <p>
                  <strong>description</strong> <br />
                  Explore a vast collection of films from various genres. Watch trailers, read reviews, and discover your next cinematic adventure with ease
                </p>*/
               }
                <a href="https://privils.github.io/movie-hub/">
                <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={image5} alt="" />
              <div className="layer">
                <h3>Food site</h3>
               {
                /* <p>
                  <strong>description</strong> <br />
                Indulge your senses in a culinary journey. From mouthwatering recipes to restaurant reviews and cooking tips, satisfy your cravings and elevate your dining experience.
                  </p>*/
               }
                <a href=" https://privils.github.io/privils_food_site/">
                <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={image6} alt="" />
              <div className="layer">
                <h3>Game site</h3>
               {
                /* <p>
                  <strong>description</strong> <br />
                  Immerse yourself in a world of gaming excitement. From action-packed shooters to immersive RPGs, find your next favorite game and join the fun.
                </p>*/
               }
                <a href=" https://privils.github.io/Game-Index/">
                <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={image3} alt="" />
              <div className="layer">
                <h3>ART site</h3>
               {
                /* <p>
                  <strong>description</strong> <br />
                  Immerse yourself in a vibrant gallery of creativity. Explore diverse artworks, from traditional paintings to digital masterpieces, and uncover inspiration at every click.
                </p>*/
               }
                <a href=" https://privils.github.io/art/">
                <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={image7} alt="" />
              <div className="layer">
                <h3>Weather site</h3>
              {/*  <p>
                  <strong>description</strong> <br />
                Stay ahead of the forecast with our intuitive weather app. Get real-time updates, hourly forecasts, and weather alerts to plan your day effectively. </p>*/
              }
                <a href="https://privils.github.io/daily_weather/">
                <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={image4} alt="" />
              <div className="layer">
                <h3>rick n momo</h3>
               {
                /* <p>
                  <strong>description</strong> <br />
                  Delve into the bizarre and hilarious universe of Rick and Morty. Dive deep into episode guides, character profiles, and fan theories.
                </p>*/
               }
                <a href="https://privils.github.io/rickNmomo/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt"/>
                </a>
              </div>
            </div>
          </div>
          <a href="https://github.com/Privils" className="btn">
            see more
          </a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="subtitle">contact me</h1>
              <p>
                <FaEnvelope className="leftIcon" />
                privilledgeblack47@gmail.com
              </p>
              <p>
                <FaPhone className="leftIcon" />
                0659165816
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100046809441429">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/privilledge-black-15b928291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Privils">
                  <FaGithub />
                </a>
              </div>
              <a
                href={document1}
                download
                className="btn btn2"
              >
                download cv
              </a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  placeholder="your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="your Message"
                  required
                ></textarea>
                <button type="submit" className="btn btn2" onSubmit={thanks}>
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
