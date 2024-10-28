import React, { useState } from "react";
import "../assets/css/process.css";
import Spline from "@splinetool/react-spline";

const Process = () => {
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is running
  const [animationComplete, setAnimationComplete] = useState(false); // Track if animation is complete

  const handleClick = () => {
    if (!isAnimating && !animationComplete) {
      // Start animation if not already animating and if animation hasn't completed
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationComplete(true); // Mark animation as complete
      }, 3000); // Assume animation duration is 3 seconds (adjust to match your animation)
    } else if (animationComplete) {
      // If animation is complete, scroll to the next section
      const nextSection = document.getElementById("Our-team"); // Replace with actual ID
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      className="process"
      id="process"
      onClick={handleClick} // Attach click handler here
    >
      <Spline
        scene="https://prod.spline.design/HtrkuqP-PK29aLJo/scene.splinecode"
        style={{ width: "100%", height: "100%", opacity: 0.5, background: 'none' }}
        className="canvas"
      />
    </section>
  );
};

export default Process;
