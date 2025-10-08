import React from "react";

const ArtistOverlay = ({ sections }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        padding: "6rem 18rem", // desktop padding
        background: "rgba(0,0,0,0.4)",
        border: "2px solid white",
        borderRadius: "0px",
        minWidth: "500px",
        maxWidth: "90%",
        textAlign: "left",
        color: "white",

        // Responsive adjustments
        // @media queries with inline JS
        // we'll override padding and transforms for smaller screens
        ...(window.innerWidth <= 768 && {
          padding: "3rem 2rem",
          top: "25%",
        }),
        ...(window.innerWidth <= 480 && {
          padding: "2rem 1.5rem",
          top: "20%",
        }),
      }}
    >
      {/* Artist name */}
      <div
        style={{
          transform: "translate(-250px, 5px)",
          marginBottom: "6px",
          ...(window.innerWidth <= 768 && { transform: "translate(-100px, 0)" }),
          ...(window.innerWidth <= 480 && { transform: "translate(0, 0)" }),
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Artist Name</h1>
      </div>

      {/* Separator line */}
      <div
        style={{
          height: "2px",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          marginBottom: "12px",
          transform: "translate(-250px, 0px)",
          ...(window.innerWidth <= 768 && { transform: "translate(-100px, 0)" }),
          ...(window.innerWidth <= 480 && { transform: "translate(0, 0)" }),
        }}
      />

      {/* Roles */}
      <div
        style={{
          transform: "translate(-250px, 0px)",
          ...(window.innerWidth <= 768 && { transform: "translate(-100px, 0)" }),
          ...(window.innerWidth <= 480 && { transform: "translate(0, 0)" }),
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
            letterSpacing: "1px",
          }}
        >
          | Photographer | Creator | Manager |
        </p>
      </div>

      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
          transform: "translate(-250px, 0px)",
          ...(window.innerWidth <= 768 && { transform: "translate(-100px, 0)" }),
          ...(window.innerWidth <= 480 && { transform: "translate(0, 0)", flexDirection: "column" }),
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
              fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
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
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
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
