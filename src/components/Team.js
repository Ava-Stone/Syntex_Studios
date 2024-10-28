import React, { useEffect, useState, useRef } from 'react';
import "../assets/css/team.css";

const Team = () => {
  const [activeCard, setActiveCard] = useState(0);
  const teamSectionRef = useRef(null);

  const animateCards = () => {
    setActiveCard(0); // Reset animation to the first card

    // Animate the circle moving from one card to another
    const interval = setInterval(() => {
      setActiveCard((prevCard) => {
        if (prevCard < 3) {
          return prevCard + 1;
        } else {
          clearInterval(interval); // Stop the interval when it reaches the last card
          return prevCard;
        }
      });
    }, 1000); // 1-second delay between each card
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCards(); // Start animation when `Team` section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }

    return () => {
      if (teamSectionRef.current) {
        observer.unobserve(teamSectionRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    const nextSection = document.getElementById('About');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  return (
    <section className="team" id="Our-team" ref={teamSectionRef} onClick={handleCardClick}>
      <h1>Our Team</h1>
      <div className="team-members">
        {['Collin', 'Justin', 'Isaiah', 'Aarushi'].map((name, index) => (
          <div key={index} className={`member ${activeCard === index ? 'active' : ''}`}>
            <div className={`circle ${activeCard === index ? 'show-circle' : ''}`}></div>
            <h3>{name}</h3>
            <p>Position</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
