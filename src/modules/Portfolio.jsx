import React from "react";
import PortfolioGrid from "./submodules/Portfolio/PortfolioGrid";
import "../App.css";

import img1 from "../images/Portfolio/Portfolio.jpeg";
import img2 from "../images/Portfolio/Portfolio2.jpeg";
import img3 from "../images/Portfolio/Portfolio3.jpeg";
import img4 from "../images/Portfolio/Portfolio4.jpeg";

const Portfolio = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section id="portfolio" style={{ minHeight: "100vh", background: "#fff", color: "#fff" }}>
      <h2 style={{ textAlign: "center", padding: "2rem 0", fontSize: "2rem" }}>Portfolio</h2>
      <PortfolioGrid images={images} />
    </section>
  );
};

export default Portfolio;
