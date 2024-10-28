import React, { useEffect, useState } from 'react';
import "../assets/css/wireframe.css";
import Polygon from "../assets/images/Polygon 1.png";
import Polygon1 from "../assets/images/Polygon 2.png";
import Polygon2 from "../assets/images/Polygon 3.png";
import Polygon3 from "../assets/images/Polygon 4.png";
import logo from "../assets/images/Logo.png";
import Main from '../Main';

const Wireframe = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  // Starts the animation and sets a delayed navigation
  const startAnimation = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000); // Adjust this duration to match your CSS animation length
  };

  return (
    <div className={`wireframe ${animationStarted ? 'animate' : ''}`} onClick={startAnimation}>
      <div className='main-conten'>
        <Main/>
      </div>
      {!animationCompleted ? (
        <>
          <img src={Polygon} className='poly1' alt="Polygon 1" />
          <img src={Polygon1} className='poly2' alt="Polygon 2" />
          <img src={Polygon2} className='poly3' alt="Polygon 3" />
          <img src={Polygon3} className='poly4' alt="Polygon 4" />
        </>
      ): ""}
    </div>
  );
};

export default Wireframe;
