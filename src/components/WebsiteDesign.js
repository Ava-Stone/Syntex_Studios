import React from 'react';
import WebsiteCard from './WebsiteCard';
import "../assets/css/webdesign.css";

const WebsiteDesign = () => {
  const cardLi = [
    'Data-informed design decisions based on user behavior analysis',
    'Professional creative design that pushes the boundaries of digital aesthetics',
    'Conversion rate optimization through multivariate testing',
    'Emotional design implementation for stronger user connections',
    'Micro-interactions design for enhanced user engagement',
    'Personalized user interfaces based on machine learning insights',
    'Cognitive load optimization for improved information retention',
    'Integration of cutting-edge design trends and technologies'
  ];

  const cardKeyFeatures = [
    {
      key: 'Visual Branding',
      value: 'captures your unique identity',
    },
    {
      key: 'Brand Guidelines ',
      value: 'consistent messaging',
    },
    {
      key: 'Brand Identity',
      value: 'aligned with your business goals',
    },
    {
      key: 'Mockups and Prototypes',
      value: 'to visualize your online presence',
    },
    {
      key: 'Digital and Print Collateral',
      value: 'tells your story',
    },
    {
      key: '3D Design Services',
      value: 'to create interactive digital experiences',
    }
  ];

  const handleCardClick = () => {
    const nextSection = document.getElementById('web-code'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='webdesign-image' id='web-design'  onClick={handleCardClick}>
      <WebsiteCard 
        heading="Website Design" 
        leftPara='At Syntex Studios, we create visually appealing and user-friendly websites tailored for underrepresented businesses. Our approach combines data-driven methodologies with the creativity of professional designers to ensure designs that resonate with your target audience, stand out in the digital landscape, and maximize conversions and user engagement.' 
        links={cardLi} 
        features={cardKeyFeatures} 
        btnValue="Graphic" 
        size='80%'
      />
    </section>
  );
};

export default WebsiteDesign;
