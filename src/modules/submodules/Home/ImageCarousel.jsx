import React from "react";

const ImageCarousel = ({ images, current }) => (
  <>
    {images.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Slide ${idx + 1}`}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 1.5s ease-in-out",
          opacity: idx === current ? 1 : 0,
        }}
      />
    ))}
  </>
);

export default ImageCarousel;

