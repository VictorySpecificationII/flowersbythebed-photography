import "./submodules/Projects/Projects.css";
import project1 from "../images/Home/Home.jpeg";
import project2 from "../images/Home/Home2.jpeg";
import project3 from "../images/Home/Home3.jpeg";
import project4 from "../images/Home/Home4.jpeg";

export default function ProjectsSection() {
  return (
    <div className="projects-container">

      {/* Section Title */}
      <h2 className="projects-title">My Projects</h2>

      {/* Grid of Projects */}
      <div className="projects-grid">
        {[project1, project2, project3, project4].map((img, idx) => (
          <div className="project-card" key={idx}>
            <img src={img} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Optional custom content section */}
      <section className="custom-section">
        <h2>Special Feature</h2>
        <p>This area is flexible. Add text, media, or promo content here.</p>
      </section>

    </div>
  );
}
