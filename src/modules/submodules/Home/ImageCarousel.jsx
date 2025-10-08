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

    <div
      style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        zIndex: 3,
      }}
    >
      {images.map((_, idx) => (
        <div
          key={idx}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: idx === current ? "white" : "rgba(255,255,255,0.5)",
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </div>
  </>
);

export default ImageCarousel;
