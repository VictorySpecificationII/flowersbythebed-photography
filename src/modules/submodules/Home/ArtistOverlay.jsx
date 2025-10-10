import React, { useState, useEffect } from "react";

const ArtistOverlay = ({ sections }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Dynamically calculate the top bar height
    const topBar = document.querySelector(".topbar");
    if (topBar) {
      setTopOffset(topBar.offsetHeight);
    }

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
    width: isMobile ? "80vw" : isTablet ? "60vw" : "500px",
    height: isMobile ? "80vw" : "auto",
    minWidth: "300px",
    maxWidth: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    justifyContent: "center",
    textAlign: isMobile ? "center" : "left",
    color: "white",
    padding: isMobile ? "1.5rem" : isTablet ? "3rem 2rem" : "3rem 6rem",
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
      <p style={{ margin: 0, fontSize: isMobile ? "0.9rem" : "1rem", letterSpacing: "1px" }}>
        | Photographer | Maker | Artist |
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {sections.map(({ label, id }) => (
          <button
            key={id}
            style={{
              padding: "0.5rem 1.5rem",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "white";
            }}
            onClick={() => {
              const section = document.getElementById(id);
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtistOverlay;
