import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import  Typed from "typed.js";
import { motion } from "motion/react"


const Header = () => {
    const [activeTab, setActiveTab] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const typedElement = useRef(null);
    const typedInstance = useRef(null);
    const [isSticky, setIsSticky] = useState(false)
    const openTab = (tabName) => {
      setActiveTab(tabName);
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  const handleScroll = () =>{
    setIsSticky(window.scrollY > 50)
  }
    const location = useLocation(); 
      useEffect(() => {
        AOS.init();
    
         typedInstance.current = new Typed(typedElement.current, {
      strings: [" hi, im <span>priviledge</span> <br />a developer based in <br /><i> <span>cape town s.a</span></i>"],
      typeSpeed: 125,
      backSpeed: 25,
      loop: true,
    });
 window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // Destroy Typed instance on unmount to prevent memory leaks
    return () => {
      typedInstance.current.destroy();
    };
      }, []);


      const isHomePage = location.pathname === "/";
  
    return (
      <header id="header">
        <div className="container">
          <nav className={isSticky ? "sticky" : ""}>
            <a href="#" className="logo  animate__animated animate__fadeInTopLeft">
              privilsWebDev
            </a>
            <ul id="sideMenu" className={isMenuOpen ? "open" : ""}>
            {!isHomePage && <li><Link to="/">Home</Link></li>}
             
  
  {isHomePage && (
                <>
                  <li className='animate__animated animate__fadeInTopRight animate__delay-.5s	.5s'><a href="#about">About</a></li>
                  <li  className='animate__animated animate__fadeInTopRight animate__delay-1s	1s'><a href="#services">Services</a></li>
                  <li  className='animate__animated animate__fadeInTopRight animate__delay-1.5s	1.5s'><a href="#portfolio">Portfolio</a></li>
                  <li  className='animate__animated animate__fadeInTopRight animate__delay-2s	2s'><a href="#contact">Contact</a></li>
                  <li onClick={toggleMenu}>
                <FaTimes className="icon" />
              </li>
            
                </>
              )}
            </ul>
          
            <FaBars className="icon" onClick={toggleMenu} />
         </nav>
          
          <div className="header-text">
            <p id="Jobtitle" className='animate__animated animate__lightSpeedInRight animate__delay 2s	-2.5s' data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="800">front-end developemt</p>
            <h1 ref={typedElement} className="intro">
             
            </h1>
          </div>
        </div>
      </header>
    );
}

export default Header
