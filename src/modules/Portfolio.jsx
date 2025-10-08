import React from "react";
import PortfolioImg from "../images/Portfolio/Portfolio.jpeg";
import "../App.css";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section"
      style={{
        backgroundImage: `url(${PortfolioImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",       // text color over image
      }}
    >
      <h1>Portfolio</h1>
      <p>This is my Portfolio!</p>
    </section>
  );
};

export default Portfolio;
