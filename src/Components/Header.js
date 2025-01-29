import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  

  const isHomePage = location.pathname === "/";

  return (
    <header id="header">
      <div
        className="container"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <nav>
          <a href="/" className="logo">
            privilsWebDev
          </a>
          <ul id="sideMenu" className={isMenuOpen ? "open" : ""}>
            {!isHomePage && <li><Link to="/">Home</Link></li>}
            {isHomePage && (
              <>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </>
            )}
            <li onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="icon" />
            </li>
          </ul>
          <FaBars className="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </nav>
        <div className="header-text">
          <p id="Jobtitle">Front-end Development</p>
          <h1 className="intro">
            Hi, I'm <span>Priviledge</span> <br />
            A developer based in <br />
            <i>
              <span>Cape Town, S.A</span>
            </i>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
