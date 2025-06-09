import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="main">
        <h1 className="subtitle">beginner level projects</h1>
        <div className="beginner">
          <div
            className="work"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src={require("./images/projectsImages/rick n momo.png")}
              alt=""
            />
            <div className="layer">
              <h3>rick n momo</h3>

              <Link to="https://privils.github.io/rickNmomo/">
                <FaExternalLinkAlt className="FaExternalLinkAlt" />
              </Link>
            </div>
          </div>

          <div
            className="work"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={require("./images/projectsImages/color.png")} alt="" />
            <div className="layer">
              <h3>color picker</h3>

              <Link to="https://privils.github.io/color/">
                <FaExternalLinkAlt className="FaExternalLinkAlt" />
              </Link>
            </div>
          </div>
          <div
            className="work"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={require("./images/projectsImages/counter.png")} alt="" />
            <div className="layer">
              <h3>counter</h3>

              <Link to="https://privils.github.io/counter">
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
            <img src={require("./images/projectsImages/tip-calc.png")} alt="" />
            <div className="layer">
              <h3>split bill</h3>

              <Link to="https://privils.github.io/Tip-Calculator">
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
            <img src={require("./images/projectsImages/clock.png")} alt="" />
            <div className="layer">
              <h3>Clock</h3>

              <Link to="https://privils.github.io/clock">
                <FaExternalLinkAlt className="FaExternalLinkAlt" />
              </Link>
            </div>
          </div>
        </div>

        <h1 className="subtitle">intermediate level projects</h1>

        <div className="Intermediate">
          <div
            className="work"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={require("./images/projectsImages/to-do.png")} alt="" />
            <div className="layer">
              <h3>to-do list</h3>

              <Link to="https://privils.github.io/To-Do-App">
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
            <img src={require("./images/weather app.png")} alt="" />
            <div className="layer">
              <h3>weather app</h3>

              <Link to="https://privils.github.io/daily_weather">
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
            <img
              src={require("./images/projectsImages/brainBlitz.png")}
              alt=""
            />
            <div className="layer">
              <h3>brainBlitz</h3>

              <Link to="https://privils.github.io/brainblitz/">
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
            <img
              src={require("./images/projectsImages/random-quotes.png")}
              alt=""
            />
            <div className="layer">
              <h3>random quotes</h3>

              <Link to="https://privils.github.io/random-quotes/">
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
            <img src={require("./images/projectsImages/joke.png")} alt="" />
            <div className="layer">
              <h3>random jokes</h3>

              <Link to="https://privils.github.io/random-joke-api/">
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
            <img
              src={require("./images/projectsImages/image-slider.png")}
              alt=""
            />
            <div className="layer">
              <h3>Image slider</h3>

              <Link to="https://privils.github.io/image-slider/">
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
          <div
            className="work"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={require("./images/projectsImages/meaning.png")} alt="" />
            <div className="layer">
              <h3>word search</h3>

              <Link to="https://privils.github.io/word-Search/">
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
            <img src={require("./images/projectsImages/music.png")} alt="" />
            <div className="layer">
              <h3>play-fi</h3>

              <Link to="https://privils.github.io/playfi-music-app/">
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
            <img
              src={require("./images/projectsImages/contact form.png")}
              alt=""
            />
            <div className="layer">
              <h3>contact form</h3>

              <Link to="https://privils.github.io/contact-form/">
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
            <img
              src={require("./images/projectsImages/login form.png")}
              alt=""
            />
            <div className="layer">
              <h3>login form</h3>

              <Link to="https://privils.github.io/login-form/">
                <FaExternalLinkAlt className="FaExternalLinkAlt" />
              </Link>
            </div>
          </div>
        </div>

        <h1 className="subtitle">advanced level projects</h1>
        <div className="advanced">
          <div
            className="work"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={require("./images/projectsImages/ART.png")} alt="" />
            <div className="layer">
              <h3>ART</h3>

              <Link to="https://privils.github.io/art/">
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
            <img
              src={require("./images/projectsImages/alf-clone.png")}
              alt=""
            />
            <div className="layer">
              <h3>alfred plumbing clone</h3>

              <Link to="https://privils.github.io/alfreds-plumpco/">
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
            <img
              src={require("./images/projectsImages/willow-home.png")}
              alt=""
            />
            <div className="layer">
              <h3>willow home</h3>

              <Link to="https://privils.github.io/willowhome/">
                <FaExternalLinkAlt className="FaExternalLinkAlt" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
