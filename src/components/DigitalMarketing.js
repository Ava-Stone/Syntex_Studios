import React, { useEffect } from 'react'
import "../assets/css/digital.css"
import WebsiteCard from './WebsiteCard';
import Aos from 'aos';


const DigitalMarketing = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: true,     // Animation will happen only once during scroll
    });
  }, []);
  const cardLi = [
    "AI-powered audience segmentation and targeting",
    "Predictive analytics for campaign optimization",
    "Cross-channel attribution modeling",
    "Automated content personalization at scale",
    "Real-time bidding and ad placement optimization",
    "Sentiment analysis for brand reputation management",
    "Algorithmic budget allocation across marketing channels",
    "Continuous A/B testing and performance improvement",
  ];
  const cardKeyFeatures = [
    {
      key: "Targeted social media campaigns ",
      value: "",
    },
    {
      key: "Email marketing",
      value: "to nurture customer relationships",
    },
    {
      key: "Search engine optimization (SEO)",
      value: "",
    },
    {
      key: "Analytics and reporting",
      value: " for continuous improvement",
    },
    {
      key: "Content marketing",
      value: "  to showcase your expertise",
    },
    {
      key: "Digital advertising",
      value: "tailored to your audience",
    },
  ];
  const handleCardClick = () => {
    const nextSection = document.getElementById('process');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      
    }
  };
  return (
    <section className='dital' id='digital-marketing' onClick={handleCardClick}>
      <div className='digital1' data-aos="fade-right">
        <h1 className="backhead">Website Design</h1>
        <div className='digital2' data-aos="fade-right">
        <h1 className="backhead">Website Code</h1>
        <div className="digital-cont1">
          <WebsiteCard
            heading="Digital Marketing"
            leftPara="Syntex Studios empowers underrepresented businesses with data-driven digital marketing strategies that deliver measurable results. Our research-forward approach leverages advanced analytics and machine learning to connect you with your audience, increase visibility, and drive growth in the digital realm."
            links={cardLi}
            features={cardKeyFeatures}
            btnValue="https://prod.spline.design/pnp-3dR6CK9SjeLK/scene.splinecode"
            size='100%'
          />
        </div>
        </div>
      </div>
      <div className="digital-cont2">
          <WebsiteCard
            heading="Digital Marketing"
            leftPara="Syntex Studios empowers underrepresented businesses with data-driven digital marketing strategies that deliver measurable results. Our research-forward approach leverages advanced analytics and machine learning to connect you with your audience, increase visibility, and drive growth in the digital realm."
            links={cardLi}
            features={cardKeyFeatures}
            btnValue="Digital"
            size='100%'
          />
        </div>
    </section>
  )
}

export default DigitalMarketing
