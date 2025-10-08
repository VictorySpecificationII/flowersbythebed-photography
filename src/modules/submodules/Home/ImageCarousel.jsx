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

    {/* Carousel dots */}
    <div className="carousel-dots">
      {images.map((_, idx) => (
        <div
          key={idx}
          className={`carousel-dot ${idx === current ? "active" : ""}`}
        />
      ))}
    </div>

    <style>
      {`
        .carousel-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.5);
          transition: background-color 0.3s;
        }

        .carousel-dot.active {
          background-color: white;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .carousel-dots {
            bottom: 20px; /* move up closer to bottom */
            gap: 6px;
          }

          .carousel-dot {
            width: 6px;
            height: 6px;
          }
        }

        @media (max-width: 480px) {
          .carousel-dots {
            bottom: 15px;
            gap: 4px;
          }

          .carousel-dot {
            width: 5px;
            height: 5px;
          }
        }
      `}
    </style>
  </>
);

export default ImageCarousel;
