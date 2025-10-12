import "./submodules/Projects/Projects.css";
import { useState, useEffect, useRef } from "react";
import GallerySection from "./submodules/Projects/GallerySection";
import ParallaxBg from "../images/Home/ParallaxBg.jpeg";

// Import images statically per folder
const project1Gallery = Object.values(import.meta.glob('../images/Projects/Project1/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project2Gallery = Object.values(import.meta.glob('../images/Projects/Project2/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project3Gallery = Object.values(import.meta.glob('../images/Projects/Project3/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);
const project4Gallery = Object.values(import.meta.glob('../images/Projects/Project4/*.{jpg,jpeg,png}', { eager: true })).map(m => m.default);

// Projects array
const projects = [
  { title: "Project Alpha", date: "Jan 2024", gallery: project1Gallery },
  { title: "Project Beta", date: "Feb 2024", gallery: project2Gallery },
  { title: "Project Gamma", date: "Mar 2024", gallery: project3Gallery },
  { title: "Project Delta", date: "Apr 2024", gallery: project4Gallery },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const parallaxRef = useRef(null);

  // Scroll-based parallax
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY - parallaxRef.current.offsetTop;
        parallaxRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="projects-container">
      {/* Parallax Header */}
      <section
        ref={parallaxRef}
        className="projects-parallax-section"
        style={{ backgroundImage: `url(${ParallaxBg})` }}
      >
      </section>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div
            className="project-card"
            key={idx}
            onClick={() => setSelectedProject(proj)}
          >
            <img src={proj.gallery[0]} alt={proj.title} loading="lazy" />
            <div className="project-overlay">
              <h3>{proj.title}</h3>
              <span>{proj.date}</span>
            </div>
          </div>
        ))}
      </div>


      {/* Gallery Popup */}
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
