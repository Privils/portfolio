import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
useEffect(()=>{
  AOS.init()
}, [])
  return (
    <header id='header'> 
      <div className="container" data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0">
        <nav>
          <a href="#" className="logo">privilsWebDev</a>
          <ul id="sideMenu" className={isMenuOpen ? 'open' : ''}>
            <li><a href="#header" >home</a></li>
            <li><a href="#about" >about</a></li>
            <li><a href="#services" >services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
            <li onClick={toggleMenu}><FaTimes className='icon' /></li> 
          </ul>
          <FaBars className='icon' onClick={toggleMenu} /> 
        </nav>
        <div className="header-text">
        <p id='Jobtitle'>front-end developemt</p>
          <h1 className="intro">hi, im <span>priviledge</span> <br />a developer based in <br />
          <i> <span>cape town s.a</span></i></h1>
        </div>
      </div>
    </header>
  );
}


export default Header;
