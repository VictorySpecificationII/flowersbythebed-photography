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
      }}
    >
      <h2 style={{ textAlign: "center", padding: "4rem 0 2rem 0", fontSize: "2rem" }}>
        Portfolio
      </h2>
      <PortfolioMasonry images={images} />
    </section>
  );
};

export default Portfolio;
