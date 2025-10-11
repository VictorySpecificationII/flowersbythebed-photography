import "./submodules/AboutMe/AboutMe.css";
import photographerImg from "../images/Home/Home3.jpeg"; // replace with your image paths
import creatorImg from "../images/Home/Home.jpeg";
import artistImg from "../images/Home/Home2.jpeg";

export default function AboutMe() {
  return (
    <div className="aboutme-container">

      {/* Photographer Section */}
      <section className="aboutme-section">
        <div className="aboutme-image">
          <img src={photographerImg} alt="Photographer" />
        </div>
        <div className="aboutme-text">
          <h2>Photographer</h2>
          <p>I capture moments and tell stories through my lens, finding beauty in every frame.</p>
        </div>
      </section>

      {/* Creator Section */}
      <section className="aboutme-section reverse">
        <div className="aboutme-image">
          <img src={creatorImg} alt="Creator" />
        </div>
        <div className="aboutme-text">
          <h2>Creator</h2>
          <p>I bring ideas to life, designing experiences and content that inspire and engage.</p>
        </div>
      </section>

      {/* Artist Section */}
      <section className="aboutme-section">
        <div className="aboutme-image">
          <img src={artistImg} alt="Artist" />
        </div>
        <div className="aboutme-text">
          <h2>Artist</h2>
          <p>From canvas to digital, I explore creativity and expression in every medium I touch.</p>
        </div>
      </section>

    </div>
  );
}
