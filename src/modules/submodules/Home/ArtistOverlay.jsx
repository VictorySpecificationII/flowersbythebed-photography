import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistOverlay.css"; // import the CSS file

const ArtistOverlay = ({ sections, setPageFade }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [topOffset, setTopOffset] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const topBar = document.querySelector(".topbar");
    if (topBar) setTopOffset(topBar.offsetHeight);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = (id) => {
    if (id === "projects" && setPageFade) {
      setPageFade(true);
      setTimeout(() => {
        navigate("/projects");
        setPageFade(false);
      }, 400);
    } else if (id === "clientphotos") {
      window.open("https://pixieset.com", "_blank");
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="artist-overlay" style={{ top: `calc(30% + ${topOffset}px)` }}>
      <h1 className="artist-title">Andri Georgiou</h1>
      <div className="artist-divider" />
      <p className="artist-subtitle">| Photographer | Maker | Artist |</p>
      <div className="artist-buttons">
        {sections.map(({ label, id }) => (
          <button
            key={id}
            className="artist-button"
            onClick={() => handleSectionClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtistOverlay;
