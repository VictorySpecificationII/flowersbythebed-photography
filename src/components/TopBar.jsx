import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "../styles/TopBar.css";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // initialize navigation

  const handleScrollOrNavigate = (e, id) => {
    e.preventDefault();

    if (id === "about") {
      // Navigate to /about route
      navigate("/about");
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="topbar">
      <div className="logo">Andri Georgiou | Portfolio</div>

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
          <a href="#home" onClick={(e) => handleScrollOrNavigate(e, "home")}>Home</a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleScrollOrNavigate(e, "portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScrollOrNavigate(e, "projects")}>Projects</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScrollOrNavigate(e, "about")}>About Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
