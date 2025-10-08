import React from "react";
import HomeImg from "../images/Home/Home.jpeg";
import "../App.css";

const Home = () => {
  return (
    <section
      id="home"
      className="section"
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",       // text color over image
      }}
    >
      <h1>Home</h1>
      <p>Welcome to my portfolio!</p>
    </section>
  );
};

export default Home;
