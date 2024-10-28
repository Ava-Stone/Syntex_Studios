import React, { useEffect } from "react";
import "../assets/css/webcode.css";
import WebsiteCard from "./WebsiteCard";
import Aos from "aos";

const WebsiteCode = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: false,     // Animation will happen only once during scroll
    });
  }, []);
  const cardLi = [
    "Microservices architecture for scalability and flexibility",
    "Progressive Web App (PWA) development for enhanced user experience",
    "Automated testing and continuous integration/deployment (CI/CD)",
    "Performance optimization using lazy loading and code splitting",
    "API-first development approach for seamless integrations",
    "Blockchain integration for enhanced security and transparency",
    "Machine learning-powered personalization and recommendation engines",
    "Accessibility compliance with WCAG 2.1 standards",
  ];
  const cardKeyFeatures = [
    {
      key: "Custom Coding Solutions",
      value: " for your specific needs",
    },
    {
      key: "Content Management Systems ",
      value: " for easy updates",
    },
    {
      key: "Responsive Design",
      value: "for seamless mobile experiences",
    },
    {
      key: "SEO-Friendly Structure",
      value: "to improve visibility",
    },
    {
      key: "E-commerce Integration",
      value: "  to expand your reach",
    },
    {
      key: "Security Features",
      value: " to protect your digital assets",
    },
  ];

  const handleCardClick = () => {
    const nextSection = document.getElementById('digital-marketing');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      
    }
  };
  return (
    <section className="webcode" id="web-code"  onClick={handleCardClick}>
      <div className="webcode-cont" data-aos="fade-right">
        <h1 >Website Design</h1>
        <div className="webcode-cont1">
          <WebsiteCard
            heading="Website Code"
            leftPara="Our expert developers at Syntex Studios build robust, scalable websites optimized for underrepresented businesses. We use cutting-edge technologies and data-driven methodologies to create digital platforms that help you compete effectively in the growing online marketplace."
            links={cardLi}
            features={cardKeyFeatures}
            btnValue="https://prod.spline.design/Bzjp8u6odxXifirS/scene.splinecode"
            size='100%'
          />
        </div>
      </div>
      <div className="webcode-cont2">
          <WebsiteCard data-aos="fade-bottom"
            heading="Website Code"
            leftPara="Our expert developers at Syntex Studios build robust, scalable websites optimized for underrepresented businesses. We use cutting-edge technologies and data-driven methodologies to create digital platforms that help you compete effectively in the growing online marketplace."
            links={cardLi}
            features={cardKeyFeatures}
            btnValue="Code"
            size='100%'
          />
        </div>
    </section>
  );
};

export default WebsiteCode;
