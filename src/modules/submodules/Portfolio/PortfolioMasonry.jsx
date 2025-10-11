import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./PortfolioMasonry.css";

const PortfolioMasonry = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // JS breakpoints: ensures proper column distribution
  const breakpoints = {
    default: 4,
    1200: 3,
    768: 2,
    480: 2  // two columns on mobile
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="image-wrapper"
            onClick={() => setLightboxIndex(idx)}
          >
            <img src={img} alt={`Portfolio ${idx + 1}`} />
          </div>
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

