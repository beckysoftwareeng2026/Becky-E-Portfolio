import "./Resume.css";
import Logo from "./Logo";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-card">
      <div className="resume-header">
  <div className="resume-logo-wrapper">
    <Logo />
  </div>

  <div className="resume-heading">
    <p className="resume-eyebrow">Jennifer Creates</p>

    <h1>Jennifer.</h1>

    <p className="resume-title">
      Full Stack Software Engineer
    </p>

    <p className="resume-location">
      Georgia • Open to Software Engineering Opportunities
    </p>
  </div>
</div>

        <p className="resume-intro">
          Building thoughtful software with precision, creativity, and purpose.
          Radiation Therapist turned developer, bringing real-world discipline,
          empathy, and problem-solving into modern web development.
        </p>

        <div className="resume-divider" />

        <section className="resume-section">
          <h2>About</h2>
          <p>
            Software engineer focused on responsive, user-centered applications
            using React, TypeScript, SQL, Firebase, and modern deployment
            workflows. I create clean interfaces, practical features, and
            polished digital experiences that feel intuitive from the first
            click.
          </p>
        </section>

        <section className="resume-section">
          <h2>Tech Stack</h2>
          <div className="resume-tags">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Vite</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>SQL</span>
            <span>Firebase</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
          </div>
        </section>

        <section className="resume-section">
          <h2>Featured Projects</h2>

          <div className="resume-grid">
            <article className="resume-item">
              <h3>JenniferCreates Portfolio</h3>
              <p>
                Personal developer portfolio designed to showcase projects,
                technical growth, and a polished professional identity.
              </p>
            </article>

            <article className="resume-item">
              <h3>Summarist</h3>
              <p>
                Audiobook summary app with authentication, protected routes,
                dynamic book pages, audio playback, and subscription flow.
              </p>
            </article>

            <article className="resume-item">
              <h3>Skinstric AI</h3>
              <p>
                AI-inspired skincare analysis project focused on clean UI,
                responsive design, and user-centered interaction.
              </p>
            </article>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>

          <article className="resume-item">
            <h3>Radiation Therapist</h3>
            <p>
              Clinical professional experienced in precision technology,
              high-pressure decision making, patient communication, quality
              assurance, and multidisciplinary collaboration.
            </p>
          </article>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <article className="resume-item">
            <h3>Software Engineering Training</h3>
            <p>Frontend Simplified · React · TypeScript · APIs · Firebase</p>
          </article>

          <article className="resume-item">
            <h3>Radiation Therapy Education</h3>
            <p>Clinical technology, anatomy, treatment planning, and patient care.</p>
          </article>
        </section>

        <div className="resume-actions">
          <a href="/Jennifer-Resume.pdf" className="resume-button">
            Download PDF
          </a>

          <a href="https://github.com/beckysoftwareeng2026" className="resume-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}