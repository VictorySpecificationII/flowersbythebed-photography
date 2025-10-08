import React from "react";
import ProjectsImg from "../images/Projects/Projects.jpeg";
import "../App.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      style={{
        backgroundImage: `url(${ProjectsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",       // text color over image
      }}
    >
      <h1>Projects</h1>
      <p>Welcome to my projects!</p>
    </section>
  );
};

export default Projects;
