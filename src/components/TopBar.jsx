import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // added useLocation
import "../styles/TopBar.css";

const TopBar = ({ setPageFade }) => { // receive setPageFade as prop
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // initialize navigation
  const location = useLocation(); // get current path

  const handleScrollOrNavigate = (e, id) => {
    e.preventDefault();

    if (id === "about") {
      setPageFade(true); // trigger fade-out
      setTimeout(() => {
        navigate("/about");
        setPageFade(false); // reset fade for new page
      }, 400); // match the CSS transition duration
    } else if (id === "home") {
      if (location.pathname !== "/") {
        // fade out, navigate home, then scroll
        setPageFade(true);
        setTimeout(() => {
          navigate("/");
          setPageFade(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 400);
      } else {
        // already on home: just scroll smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (id === "projects") {
      // fade out, navigate to projects page
      setPageFade(true);
      setTimeout(() => {
        navigate("/projects");
        setPageFade(false);
      }, 400);
    } else if (id === "portfolio") {
      // fade out, navigate home, then scroll to portfolio section
      if (location.pathname !== "/") {
        setPageFade(true);
        setTimeout(() => {
          navigate("/");

          // wait for the homepage to render
          setTimeout(() => {
            setPageFade(false);
            const section = document.getElementById("portfolio");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }, 50); // small delay ensures DOM exists
        }, 400);
      } else {
        // already on home: scroll smoothly
        const section = document.getElementById("portfolio");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
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
