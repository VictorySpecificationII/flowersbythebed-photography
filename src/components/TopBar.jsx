import React, { useState } from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // new state for mobile menu

  const handleScroll = (e, id) => {
    e.preventDefault(); // prevent default anchor jump
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="topbar">
      <div className="logo">Andri Georgiou | Portfolio</div>

      {/* Hamburger icon for mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
