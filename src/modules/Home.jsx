import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/Home/Home.jpeg";
import img2 from "../images/Home/Home2.jpeg";
import img3 from "../images/Home/Home3.jpeg";
import img4 from "../images/Home/Home4.jpeg";

const Home = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section id="home" style={{ height: "100vh", position: "relative" }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} style={{ height: "100vh" }}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <h1>Home</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </section>
  );
};

export default Home;
