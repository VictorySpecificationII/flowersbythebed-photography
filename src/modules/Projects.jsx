import "./submodules/Projects/Projects.css";
import project1 from "../images/Home/Home.jpeg";
import project2 from "../images/Home/Home2.jpeg";
import project3 from "../images/Home/Home3.jpeg";
import project4 from "../images/Home/Home4.jpeg";

export default function Projects() {
  const projects = [project1, project2, project3, project4];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((img, idx) => (
          <div key={idx} className="project-card">
            <img src={img} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

