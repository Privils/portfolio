import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <section>
    <div class="wrapper wrapper1">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
    </section>
    <script src="https://kit.fontawesome.com/536e85ac3b.js" crossorigin="anonymous"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      <div className="container">
        <div className="img-container"></div>
      </div>
      <p className="info">
        Hi my name is Priviledge I'm a junior front-end developer
      </p>
      <div className="btn-container">
        <button className="btn btn2">
          <Link to="Contact">contact</Link>
        </button>
        <button className="btn projects-btn">
          <Link to="Projects">projects</Link>
        </button>
      </div>
      <div className="info-me">
        <div className="hobbies">
          <span>
            <h1>Hobbies</h1>
            <p>
              <ul>
                <li>-Playing Chess.</li>
                <li>-discovering new things.</li>
              </ul>
            </p>
          </span>
        </div>

        <div className="hobbies">
          <h1>My Skills</h1>
          <div id="mySkills">
            <ul>
              <li className="lists">
                <span>HTML5</span>
                <i className="fab fa-html5"></i>
              </li>
              <li>
                <span>CSS3</span>
                <i className="fa fa-css3"></i>
              </li>
              <li>
                <span>JavaScript</span>
                <i className="fab fa-js"></i>
              </li>
              <li>
                <span>GitHub</span>
                <i className="fa fa-github"></i>
              </li>
              <li>
                <span>Git</span>
                <i className="fa fa-git"></i>
              </li>
              <li>
                <span>React</span>
                <i className="fa-brands fa-react"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrapper wrapper1">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
        <div className="hobbies">
          <h1>Goals</h1>
          <p>
            <ul>
              <li className="lists">Becoming a senoir software engineer</li>
              <li>Becoming a computer scientist</li>
            </ul>
          </p>
        </div>
      </div>
     
      <footer>
        <div className="footer">
          <div>
            <p>
              For more on where to contact me please visit the main navigation
              site
            </p>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <Link to="https://www.facebook.com/php?id=100046809441429">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.fa-linkedin.com/in/privilledge-black-2a6a6b275">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-whatsapp"></i>
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Privils">
                  <i className="fa fa-github"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="me-p">
              copyright ©2023 codecademyprojects. designed by{" "}
              <span className="span">Priviledge Mushure</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
