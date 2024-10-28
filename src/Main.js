import React, { useState, useEffect } from 'react';
import "./assets/css/header.css";
import Logo from "./assets/images/Logo.png";
import Menu from "./assets/images/Menu.png";
import Vector from "./assets/images/Vector.svg";
import Vector1 from "./assets/images/Vector (1).svg";
import "./assets/css/hersect.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from "./assets/images/herosect.png";
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showVectors, setShowVectors] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  const clickHandle = () => {
    setIsActive(true);
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  };

  const handleContentClick = () => {
    setShowContent(false);
    setShowVectors(true);
    setTimeout(() => {
      setShowLogo(true);
      navigate("/landing");
    }, 1000);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
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

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main">
      {isActive && (
        <div className="header">
          <div className="left">
            <h2>{currentSection}</h2>
            <p>What we do</p>
          </div>
          <img src={Logo} alt="logo" className={showLogo ? 'show' : 'mainlogo'} />
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
                <li><a href="#contact-us">Contact Us</a></li>
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="herosect" id="hero" onClick={clickHandle}>
        {!showContent && (
          <div className={isActive ? 'logosect logosect-animate' : 'logosect'}>
            <img src={Vector} className={`vect1 ${isActive ? 'move-left' : ''}`} />
            <img src={Vector1} className={`vect2 ${isActive ? 'move-right' : ''}`} />
          </div>
        )}
        {showContent && (
          <div className="herocontent" onClick={handleContentClick}>
            <img src={heroImg} alt="hero" />
            <h3 data-aos="fade-left">
              Empowering clients to establish a powerful <span>digital footprint</span>
              <br /> through <span>custom-designed websites</span>
            </h3>
            <button data-aos="zoom-in">Get in touch</button>
          </div>
        )}
        {showVectors && (
          <div className="logosect">
            <img src={Vector} id="vect1" />
            <img src={Vector1} id="vect2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
