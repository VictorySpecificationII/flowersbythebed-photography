import React, { useState, useEffect } from "react";
import "./DownArrow.css";

const DownArrow = ({ overlayWidth }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [bottomOffset, setBottomOffset] = useState("2rem");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      // calculate bottom offset dynamically
      const isMobile = width <= 480;
      if (isMobile && overlayWidth) {
        setBottomOffset(`calc(50% - ${overlayWidth / 2}px + 1rem)`);
      } else {
        setBottomOffset("2rem");
      }
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [overlayWidth]);

  return (
    <div
      className="home-down-arrow"
      style={{
        position: "absolute",
        bottom: bottomOffset,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      ↓
    </div>
  );
};

export default DownArrow;
