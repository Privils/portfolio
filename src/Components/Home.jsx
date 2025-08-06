import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCrop, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (window.location.hostname === "https://privils.github.io/portfolio/") {
      window.location.replace("https://www.privilswebdev.co.za/");
    }
  });
  return (
    <>
      <div id="about">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          <div className="row">
            <div className="col-1">
              <img src={require("./images/me.jpg")} alt="" className="img" />
            </div>
            <div className="col-2">
              <h1 className="subtitle">about me</h1>
              <p>
                Hi, my name is <span id="my-name">Priviledge M</span>, and I’m a
                22-year-old web developer based in Cape Town, South Africa. I’m
                passionate about building clean, functional, and user-friendly
                websites. My goal is to grow as a front-end developer by
                continuously learning, creating, and helping individuals and
                businesses bring their online presence to life. I’m also
                building my freelance web development brand, offering website
                creation, hosting, and maintenance services. Outside of coding,
                I enjoy art, music, exploring new experiences, and playing
                chess. I believe in pouring genuine effort into everything I do
                and consistently working toward my goals—no matter how ambitious
                they may be.
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
                  <li>
                    <p className="education">
                      <strong>freelance</strong>
                    </p>
                    | d-m-projects.co.za |
                    <p>
                      I collaborated with D-M-Projects, a growing startup, to
                      design and develop web solutions tailored to their
                      business needs. My role involved creating responsive
                      websites, optimizing user experience, and implementing
                      functional features to enhance their online presence. This
                      experience has strengthened my skills in front-end
                      development and client collaboration.
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
                <Link to="./Services" className="readmore">
                  Explore services
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="portfolio"
        className="portfolio"
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
              <img src={require("./images/movie site.png")} alt="" />
              <div className="layer">
                <h3>Movie site</h3>

                <Link to="https://privils.github.io/movie-hub/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <img src={require("./images/food site.png")} alt="" />
              <div className="layer">
                <h3>Food site</h3>

                <Link to="https://privils.github.io/privils_food_site">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={require("./images/GAME.png")} alt="" />
              <div className="layer">
                <h3>Game site</h3>

                <Link to="https://privils.github.io/Game-Index">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <img src={require("./images/poke.png")} alt="" />
              <div className="layer">
                <h3>Poke pal</h3>

                <Link to="https://privils.github.io/Poke-Pal/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <img src={require("./images/shopping.png")} alt="" />
              <div className="layer">
                <h3>shopping site</h3>

                <Link to="https://privils.github.io/ElegentClothingStore/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
            <div
              className="work"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={require("./images/animals.png")} alt="" />
              <div className="layer">
                <h3>animals</h3>

                <Link to="https://privils.github.io/animalLover/">
                  <FaExternalLinkAlt className="FaExternalLinkAlt" />
                </Link>
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <Link to="./Portfolio" className="btn">
              see more
            </Link>
          </div>
        </div>
      </div>

      <section
        className="testimonial-main"
        data-aos="fade-in"
        data-aos-duration="1300"
      >
        <h1 className="subtitle text-end">testimonials</h1>

        <div
          className="testimonials"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >


          <div className="testimonial-card">
            <p>
              We are extremely pleased with the website built by Privils Web
              Dev! The design is professional, user-friendly, and perfectly
              represents our construction business. The attention to detail,
              responsiveness, and dedication throughout the project were
              outstanding. Thank you for bringing our vision to life!
            </p>
            <div className="client-info">
              <Link to="https://d-m-projects.co.za/">
                <img
                  src={require("./images/359028.jpg")}
                  alt="D-M Projects Logo"
                  className="client-img"
                />
              </Link>
              <Link to="https://d-m-projects.co.za/" className="external">
                <h3>D-M-Projects</h3>
              </Link>
            </div>
          </div>

          <div className="testimonial-card">
  <p>
    Privils Web Dev exceeded our expectations! They created a stunning and functional online store for us. The site is fast, mobile-friendly, and exactly what we needed to grow our online sales. Highly recommended!
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/bakery-client.jpg")}
        alt="Bakery Client Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>Sweet Crumbs Bakery</h3>
    </Link>
  </div>
</div>
<div className="testimonial-card">
  <p>
    Working with Privils Web Dev was a smooth experience from start to finish. They listened to our ideas and delivered a sleek, modern site that really speaks to our brand. We appreciate their patience and professionalism.
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/consulting-client.jpg")}
        alt="Consulting Company Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>Modern Consult</h3>
    </Link>
  </div>
</div>
<div className="testimonial-card">
  <p>
    The team at Privils Web Dev did an excellent job on our website redesign. Not only does it look great, but our traffic and engagement have improved significantly since launch. Great communication and timely delivery!
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/landscape-client.jpg")}
        alt="Landscaping Company Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>Green Landscapes</h3>
    </Link>
  </div>
</div>
<div className="testimonial-card">
  <p>
    Thank you Privils Web Dev for the incredible job you did with our portfolio site. Your creativity and skill helped us showcase our work in the best way possible. We’re proud to share our link with clients now.
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/art-client.jpg")}
        alt="Art Studio Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>ArtSpace Studio</h3>
    </Link>
  </div>
</div>
<div className="testimonial-card">
  <p>
    We had no idea where to start with our website, but Privils Web Dev made the process simple and enjoyable. They explained everything clearly and delivered a polished product we’re proud of. Thank you for your hard work!
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/clinic-client.jpg")}
        alt="Clinic Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>HealthFirst Clinic</h3>
    </Link>
  </div>
</div>
<div className="testimonial-card">
  <p>
    From branding to web design, Privils Web Dev handled everything with care and creativity. Our new website looks clean, professional, and is easy to use. We’re already seeing more client inquiries come in!
  </p>
  <div className="client-info">
    <Link to="#">
      <img
        src={require("./images/clients/legal-client.jpg")}
        alt="Law Firm Logo"
        className="client-img"
      />
    </Link>
    <Link to="#" className="external">
      <h3>LegalWise Group</h3>
    </Link>
  </div>
</div>


        </div>
      </section>
    </>
  );
};

export default Home;
