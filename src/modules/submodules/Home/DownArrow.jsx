import React from "react";
import "./DownArrow.css";

const DownArrow = () => {
  return (
    <div
      className="home-down-arrow"
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      ↓
    </div>
  );
};

export default DownArrow;

