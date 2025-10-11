import "./submodules/Projects/Projects.css";
import { useState } from "react";
import GallerySection from "./submodules/Projects/GallerySection";

import project1 from "../images/Projects/Project1/Project1Cover.jpeg";
import project2 from "../images/Projects/Project2/Project2Cover.jpeg";
import project3 from "../images/Projects/Project3/Project3Cover.jpeg";
import project4 from "../images/Projects/Project4/Project4Cover.jpeg";

const projects = [
  {
    img: project1,
    title: "Project Alpha",
    date: "Jan 2024",
    gallery: [project1, project2], // add all images for this project
  },
  {
    img: project2,
    title: "Project Beta",
    date: "Feb 2024",
    gallery: [project2, project3],
  },
  {
    img: project3,
    title: "Project Gamma",
    date: "Mar 2024",
    gallery: [project3, project4],
  },
  {
    img: project4,
    title: "Project Delta",
    date: "Apr 2024",
    gallery: [project4, project1],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div
            className="project-card"
            key={idx}
            onClick={() => setSelectedProject(proj)}
          >
            <img src={proj.img} alt={proj.title} />
            <div className="project-overlay">
              <h3>{proj.title}</h3>
              <span>{proj.date}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="custom-section">
        <h2>Special Feature</h2>
        <p>This area is flexible. Add text, media, or promo content here.</p>
      </section>

      {selectedProject && (
        <GallerySection
          images={selectedProject.gallery}
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

