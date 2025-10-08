import React from "react";

const PortfolioGrid = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        padding: "2rem",
      }}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            paddingBottom: "100%", // 1:1 square
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={img}
            alt={`Portfolio ${idx + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
