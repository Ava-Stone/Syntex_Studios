import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // AOS styles
import HeroImg from "../assets/images/herosect.png";
import "../assets/css/hersect.css";

const HeroSect = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  
      once: false
    });
  },[]);

  return (
    <div className='herosect' id='hero' data-aos="fade-up">
      <img src={HeroImg} alt='heroImage' data-aos="zoom-in"/> 
      <h3 data-aos="fade-left">
        empowering clients to establish a powerful <span>digital footprint</span>
        <br /> through <span>custom-designed websites</span>
      </h3>
      <button data-aos="zoom-in">Get in touch</button>
    </div>
  );
};

export default HeroSect;
