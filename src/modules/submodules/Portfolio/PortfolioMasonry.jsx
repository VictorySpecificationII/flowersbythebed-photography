import React from "react";
import Masonry from "react-masonry-css";
import "./PortfolioMasonry.css";

{/*import "../../../../../App.css"; // adjust if needed*/}

const PortfolioMasonry = ({ images }) => {
  const shuffled = [...images].sort(() => Math.random() - 0.5);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    800: 2,
    500: 1,
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {shuffled.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Portfolio ${idx + 1}`}
            style={{
              width: "100%",
              display: "block",
              marginBottom: "10px",
              borderRadius: "6px",
              objectFit: "cover",
            }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default PortfolioMasonry;
