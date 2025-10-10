import React from "react";
import "./DownArrow.css";

const DownArrow = ({ isSquared }) => {
  return (
    <div
      className={`home-down-arrow ${isSquared ? "squared" : ""}`}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      ↓
    </div>
  );
};

export default DownArrow;
