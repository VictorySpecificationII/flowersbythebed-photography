import React from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault(); // prevent default anchor jump
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to very top
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="topbar">
      <div className="logo">Niax!|Portfolio</div>
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
