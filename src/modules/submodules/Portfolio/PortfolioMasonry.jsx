import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./PortfolioMasonry.css";

const PortfolioMasonry = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1); // -1 = closed

  const breakpoints = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Portfolio ${idx + 1}`}
            className="portfolio-img"
            onClick={() => setLightboxIndex(idx)}
            style={{ cursor: "pointer", width: "100%", display: "block" }}
          />
        ))}
      </Masonry>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
};

export default PortfolioMasonry;

