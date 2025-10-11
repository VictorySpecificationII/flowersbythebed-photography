import "./submodules/Projects/Projects.css";
import { useState } from "react";
import GallerySection from "./submodules/Projects/GallerySection";

// Import images statically per folder
const project1Gallery = Object.values(import.meta.glob('../images/Projects/Project1/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project2Gallery = Object.values(import.meta.glob('../images/Projects/Project2/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project3Gallery = Object.values(import.meta.glob('../images/Projects/Project3/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project4Gallery = Object.values(import.meta.glob('../images/Projects/Project4/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);

// Define projects
const projects = [
  { title: "Project Alpha", date: "Jan 2024", gallery: project1Gallery },
  { title: "Project Beta", date: "Feb 2024", gallery: project2Gallery },
  { title: "Project Gamma", date: "Mar 2024", gallery: project3Gallery },
  { title: "Project Delta", date: "Apr 2024", gallery: project4Gallery },
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
            <img src={proj.gallery[0]} alt={proj.title} />
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
