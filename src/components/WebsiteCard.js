import React, { useEffect } from "react";
import "../assets/css/websiteCard.css";
import Spline from "@splinetool/react-spline";
import Aos from "aos";
const WebsiteCard = ({ heading, leftPara, links, features, btnValue,size }) => {

  useEffect(() => {
    Aos.init({
      duration: 2000, 
    });
  }, []);

  return (
    <div className="webCard">
      <div className="webcard-cont" style={{maxWidth: size}} data-aos="fade-bottom">
        <h1 className="mainheading">{heading}</h1>
        <div className="webCont">
          <div className="webleft">
            <p>{leftPara}</p>
            <ul>
              {Array.isArray(links) && links.length > 0 ? (
                links.map((link, index) => <li key={index}>{link}</li>)
              ) : (
                <li>No links available</li>
              )}
            </ul>
          </div>
          <div className="webRight">
            <h3>Key Features:</h3>
            <div className="webRightCont">
              <ul>
                {Array.isArray(features) && features.length > 0 ? (
                  features.map((link, index) => (
                    <div key={index}>
                      <li>{link.key}</li>
                      <p>{link.value}</p>
                    </div>
                  ))
                ) : (
                  <li>No links available</li>
                )}
              </ul>
            </div>
            <div className="circlebtn">
              <Spline  className="webRightBtn"
        scene={ btnValue === "Graphic"
          ? "https://prod.spline.design/Nrx9WrbzqAdbV6Rs/scene.splinecode"
          : btnValue === "Code"
          ? "https://prod.spline.design/Nrx9WrbzqAdbV6Rs/scene.splinecode"
          : "https://prod.spline.design/Bzjp8u6odxXifirS/scene.splinecode"
    }
        style={{
          width: "400px", height:"250px", borderRadius: '50%', objectFit: 'cover'
        }}
        
      />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
