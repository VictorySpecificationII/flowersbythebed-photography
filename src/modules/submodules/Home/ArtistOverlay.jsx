import React from "react";

const sections = [
  { label: "Portfolio", id: "portfolio" },
  { label: "Projects", id: "projects" },
  { label: "Client Photos", id: "client-photos" },
  { label: "Contact", id: "contact" },
];

const ArtistOverlay = () => {
  return (
    <div style={overlayStyle}>
      <h1 style={styles.artistName}>Artist Name</h1>
      <div style={styles.separator} />
      <p style={styles.roles}>| Photographer | Creator | Manager |</p>

      <div style={styles.buttonRow}>
        {sections.map(({ label, id }) => (
          <button
            key={id}
            style={styles.button}
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

// --- Styles ---
const overlayStyle = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  padding: "3rem",
  background: "rgba(0,0,0,0.4)",
  border: "2px solid white",
  borderRadius: "0px",
  minWidth: "300px",
  maxWidth: "90%",
  textAlign: "left",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const styles = {
  artistName: {
    margin: 0,
    paddingBottom: "6px",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
  },
  separator: {
    height: "2px",
    width: "50%",
    maxWidth: "400px",
    backgroundColor: "white",
    marginBottom: "12px",
  },
  roles: {
    margin: 0,
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    letterSpacing: "1px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "1.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "2px solid white",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    transition: "all 0.3s",
  },
};
