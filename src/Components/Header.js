

import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the value of isMenuOpen
  };

  return (
    <header id='header'> 
      <div className="container">
        <nav>
          <a href="#" className="logo">privilsDev</a>
          <ul id="sideMenu" className={isMenuOpen ? 'open' : ''}>
            <li><a href="#header" >home</a></li>
            <li><a href="#about" >about</a></li>
            <li><a href="#services" >services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
            <li onClick={toggleMenu}><FaTimes className='icon' /></li> {/* Close icon */}
          </ul>
          <FaBars className='icon' onClick={toggleMenu} /> {/* Menu icon */}
        </nav>
        <div className="header-text">
          <p id='Jobtitle'>fron-end / fullStack developer</p>
          <h1 className="intro">hi, im <span>priviledge</span> <br />a developer based in <br />
          <i>cape town s.a</i></h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
