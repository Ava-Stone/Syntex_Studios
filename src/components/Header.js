import React, { useState, useEffect } from 'react';
import "../assets/css/header.css";
import Logo from "../assets/images/Logo.png";
import Menu from "../assets/images/Menu.png";


const Header = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const sectionId = section.getAttribute('id');
        if (sectionId) {
          setCurrentSection(sectionId);
        }
      }
    });
  };

  // Add the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="left">
        <h2>{currentSection}</h2>
        <p>What we do</p>
      </div>
      <img src={Logo} alt="logo" />
      <div className="right">
        <img src={Menu} alt="menu" onClick={toggleMenu} />
      </div>
      {menuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#web-design">Website Design</a></li>
            <li><a href="#web-code">Website Code</a></li>
            <li><a href="#digital-marketing">Digital Marketing</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#Our-team">Our Team</a></li>
            <li><a href="#About">Contact Us</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
