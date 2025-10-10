import React from "react";
import PortfolioMasonry from "./submodules/Portfolio/PortfolioMasonry";

import img1 from "../images/Portfolio/Portfolio.jpeg";
import img2 from "../images/Portfolio/Portfolio2.jpeg";
import img3 from "../images/Portfolio/Portfolio3.jpeg";
import img4 from "../images/Portfolio/Portfolio4.jpeg";
import img5 from "../images/Portfolio/Portfolio5.jpeg";
import img6 from "../images/Portfolio/Portfolio6.jpeg";
import img7 from "../images/Portfolio/Portfolio7.jpeg";
import img8 from "../images/Portfolio/Portfolio8.jpeg";
import img9 from "../images/Portfolio/Portfolio9.jpeg";
import img10 from "../images/Portfolio/Portfolio10.jpeg";
import img11 from "../images/Portfolio/Portfolio11.jpeg";
import img12 from "../images/Portfolio/Portfolio12.jpeg";

const Portfolio = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
  ];

  return (
    <section
      id="portfolio"
      style={{
        minHeight: "100vh",
        background: "#fff",
        position: "relative",
        overflow: "visible",
        paddingTop: "220px", // allow space for rectangle
      }}
    >
      {/* Glassy rectangle spanning half Home / half Portfolio */}
      <div
        style={{
          position: "absolute",
          top: "-105px", // half height above Portfolio
          left: "50%",
          transform: "translateX(-50%)",
          width: "48%",       // 20% narrower than full width
          height: "210px",    // 40% taller
          backgroundColor: "rgba(0, 0, 0, 0.4)", // translucent black
          backdropFilter: "blur(12px)",         // glassy effect
          WebkitBackdropFilter: "blur(12px)",   // Safari support
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          boxSizing: "border-box",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "6px",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Featured Portfolio</h1>
        <h2 style={{ fontSize: "1.2rem", color: "#1e90ff", margin: 0 }}>2017 - Present</h2>
        <p style={{ fontSize: "1rem", margin: 0 }}>Eclectic Everything</p>
      </div>

      <PortfolioMasonry images={images} />

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="position: absolute"] {
              width: 80%;
              height: 180px;
            }
            div[style*="position: absolute"] h1 { font-size: 1.5rem; }
            div[style*="position: absolute"] h2 { font-size: 1rem; }
            div[style*="position: absolute"] p { font-size: 0.9rem; }
          }

          @media (max-width: 480px) {
            div[style*="position: absolute"] {
              width: 90%;
              height: 140px;
            }
            div[style*="position: absolute"] h1 { font-size: 1.2rem; }
            div[style*="position: absolute"] h2 { font-size: 0.9rem; }
            div[style*="position: absolute"] p { font-size: 0.8rem; }
          }
        `}
      </style>
    </section>
  );
};

export default Portfolio;
