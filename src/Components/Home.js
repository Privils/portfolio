import React, { useEffect, useState } from "react";
import {
  FaCrop,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaHeart,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import image1 from "./images/me.jpg";
import image2 from "./images/movie site.png";
import image3 from "./images/ART.png";
import image4 from "./images/animals.png";
import image5 from "./images/food site.png";
import image6 from "./images/GAME.png";
import image7 from "./images/shopping.png";
import document1 from "./images/myCv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [tab, setTab] = useState("skills");
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const openTab = (tabName) => {
    setTab(tabName);
  };

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(()=>{
    if(window.location.hostname === "https://privils.github.io/portfolio/"){
      window.location.replace("https://www.privilswebdev.co.za/")
    }
  })
  return (
    <>
      <div
        id="about"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1300"
      >
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src={image1} alt="" className="img" />
            </div>
            <div className="col-2">
              <h1 className="subtitle">about me</h1>
              <p>
                Hi, my name is <span id="my-name">Priviledge M</span>, and I am
                a 21-year-old developer based in{" "}
                <span>Cape Town, South Africa</span>. I am deeply passionate
                about web development, always striving to push my abilities and
                create beautiful, functional websites. Beyond coding, I have a
                variety of other interests, including{" "}
                <span id="my-name">art</span>, <span id="my-name">music</span>,
                exploring new experiences, and <span id="my-name">chess</span>.
                I pour my heart and effort into everything I am passionate
                about, constantly working towards my goals—no matter how
                ambitious they may seem.
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
                    <span>Front-End</span>
                    <br />
                    HTML5
                    <br />
                    CSS 3<br />
                    Bootstrap <br />
                    React <br />
                    JavaScript <br />
                    Git <br />
                    NPM
                  </li>
                  {
                    <li>
                      <span>back-end</span>
                      <br />
                      Node.js <br />
                      Postgres <br />
                      Express.JS <br />
                      <br />
                    </li>
                  }
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
                    <p className="education">
                      <strong> study/learning experience </strong>
                    </p>
                    | codeCademy |
                    <p>
                      Completed comprehensive courses on Codecademy, gaining
                      study experience with modern web development technologies,
                      including HTML, CSS, JavaScript, Node.js, Express,
                      PostgreSQL, React, Git, and npm. Built dynamic, responsive
                      web applications while mastering version control and
                      package management to streamline development workflows.
                    </p>
                  </li>
                  <li>
                    <p className="education">
                      <strong>Internship - frontend Developer</strong>
                    </p>
                    | kreativestorm |
                    <p>
                      During my internship at kreativestorm, I worked on
                      developing and maintaining websites, improving user
                      interfaces, and optimizing web performance. I gained
                      hands-on experience with HTML, CSS ,JavaScript and
                      collaborated with other developers to bring projects to
                      completion.
                    </p>
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
          <div
            className="services-list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <div>
              <FaCrop className="crop" />
              <h2>Front-End Development</h2>
              <p className="myServices">
                I specialize in crafting interactive and engaging user
                interfaces using HTML, CSS, Bootstrap, JavaScript, and React.
                Whether you need a sleek single-page application or a visually
                stunning e-commerce platform, I deliver high-quality front-end
                solutions tailored to your needs. With a strong focus on
                responsive design and user experience, I ensure your website
                looks flawless on all devices, providing a seamless experience
                for your visitors. Let's work together to build a modern,
                visually appealing, and highly functional website that makes an
                impact!
                <a href="./Services" className="readmore">
                  read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="portfolio"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <h1 className="subtitle">my work</h1>
          <div className="work-list">
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <img src={image2} alt="" />
              <div className="layer">
                <h3>Movie site</h3>

                <a href="https://privils.github.io/movie-hub/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <img src={image5} alt="" />
              <div className="layer">
                <h3>Food site</h3>

                <a href=" https://privils.github.io/privils_food_site/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={image6} alt="" />
              <div className="layer">
                <h3>Game site</h3>

                <a href=" https://privils.github.io/Game-Index/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <img src={image3} alt="" />
              <div className="layer">
                <h3>ART site</h3>

                <a href=" https://privils.github.io/art/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <img src={image7} alt="" />
              <div className="layer">
                <h3>shopping site</h3>

                <a href="https://privils.github.io/ElegentClothingStore/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={image4} alt="" />
              <div className="layer">
                <h3>animals</h3>

                <a href="https://privils.github.io/animalLover/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </a>
              </div>
            </div>
          </div>
          <a href="https://github.com/Privils" className="btn">
            see more
          </a>
        </div>
      </div>

      <section
        className="testimonial-main"
        data-aos="fade-in"
        data-aos-duration="1300"
      >
        <h1 className="testimonial-header">testimonials</h1>
        <div
          className="testimonials"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="testimonial-container">
            <p>
              We are extremely pleased with the website built by Privils Web
              Dev! The design is professional, user-friendly, and perfectly
              represents our construction business. The attention to detail,
              responsiveness, and dedication throughout the project were
              outstanding. Thank you for bringing our vision to life!.
            </p>
            <div className="client">
              <a href="https://d-m-projects.co.za/">
                <img
                  src={require("./images/clients/logo.jpg")}
                  alt="d-m-projects logo"
                  className="client-img"
                />
              </a>

              <h3>D-M-Projects</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
