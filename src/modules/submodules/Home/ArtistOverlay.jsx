import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const isTablet = screenWidth <= 768;
  const isMobile = screenWidth <= 480;

  const overlayStyle = {
    position: "absolute",
    top: isMobile
      ? `calc(20% + ${topOffset}px)`
      : isTablet
      ? `calc(25% + ${topOffset}px)`
      : `calc(35% + ${topOffset}px)`,
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    background: "rgba(0,0,0,0.4)",
    border: "2px solid white",
    borderRadius: "0px",
    width: isMobile ? "90%" : isTablet ? "70%" : "500px",
    maxWidth: "90%",
    minWidth: "280px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: isMobile ? "1.5rem" : isTablet ? "2.5rem 2rem" : "3rem 4rem",
    overflowWrap: "break-word",
    boxSizing: "border-box",
  };

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
    <div style={overlayStyle}>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>Andri Georgiou</h1>
      <div
        style={{
          height: "2px",
          width: "80%",
          maxWidth: "400px",
          backgroundColor: "white",
          margin: "12px 0",
        }}
      />
      <p
        style={{
          margin: 0,
          fontSize: isMobile ? "0.9rem" : "1rem",
          letterSpacing: "1px",
          overflowWrap: "break-word",
        }}
      >
        | Photographer | Maker | Artist |
      </p>
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {sections.map(({ label, id }) => (
          <button
            key={id}
            style={{
              flex: "1 1 auto",
              minWidth: "100px",
              padding: "0.5rem 1rem",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem",
              transition: "all 0.3s",
              whiteSpace: "normal",
              wordBreak: "break-word",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "white";
            }}
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
