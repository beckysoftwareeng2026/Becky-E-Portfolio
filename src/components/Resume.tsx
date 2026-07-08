import "./Resume.css";
import Logo from "./Logo";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-card">
        <Logo />

        <div>
          <p className="resume-eyebrow">Jennifer Creates</p>

          <h2>
            Jennifer<span>.</span>
          </h2>

          <p className="resume-title">Full Stack Software Engineer</p>
        </div>

        <a
         href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;