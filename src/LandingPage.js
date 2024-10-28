import React, { useRef, useState } from 'react';
import ContactUs from "./components/ContactUs";
import DigitalMarketing from "./components/DigitalMarketing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSect from "./components/HeroSect";
import Process from "./components/Process";
import Team from "./components/Team";
import WebsiteCode from "./components/WebsiteCode";
import WebsiteDesign from "./components/WebsiteDesign";

const LandingPage = () => {


  return (
    <>
      <Header />
        <WebsiteDesign />
        <WebsiteCode />
       <DigitalMarketing />
        <Process />
        <Team />
        <ContactUs />
        <Footer />
    </>
  );
};

export default LandingPage;
