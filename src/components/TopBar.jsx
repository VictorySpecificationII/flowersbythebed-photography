import React from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <nav className="topbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About Me</a></li>
      </ul>
    </nav>
  );
};

export default TopBar;
