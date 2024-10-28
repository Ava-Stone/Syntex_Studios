import React, { useEffect } from 'react'
import "../assets/css/contact.css"
import Aos from 'aos';
const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: true,     // Animation happens only once during scroll
    });
  }, []);
  return (
    <section className='contact' id='About'>
      <h1 data-aos="zoom-in">Lets work together.</h1>
      <p data-aos="zoom-in">sales@syntexstudios.io</p>
      <button data-aos="zoom-in">Get Started</button>
    </section>
  )
}

export default ContactUs
