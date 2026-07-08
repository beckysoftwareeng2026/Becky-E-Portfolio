import Logo from "./Logo";
import "./PrintableResume.css";

function PrintableResume() {
  return (
    <main className="printable-resume">
      <div className="resume-sheet">
        {/* Header */}

        <header className="resume-top">
          <Logo />

          <div className="resume-name">
            <h1>
              Jennifer<span>.</span>
            </h1>

            <p>Full Stack Software Engineer</p>

            <div className="resume-contact">
              <span>Georgia</span>
              <span>•</span>
              <span>jennifercreates.dev</span>
              <span>•</span>
              <span>github.com/beckysoftwareeng2026</span>
            </div>
          </div>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>

          <p>
            Software engineer passionate about building modern web applications
            with clean architecture, intuitive user experiences, and thoughtful
            design. Transitioning from a successful healthcare career where
            precision, communication, and problem-solving were critical every
            day. Experienced building responsive applications using React,
            TypeScript, Node.js, SQL, Firebase, REST APIs, and modern deployment
            workflows.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div>
              <strong>Languages</strong>
              <p>JavaScript • TypeScript • SQL • HTML • CSS</p>
            </div>

            <div>
              <strong>Frontend</strong>
              <p>React • Vite • Next.js • Tailwind CSS</p>
            </div>

            <div>
              <strong>Backend</strong>
              <p>Node.js • Express • REST APIs • Firebase</p>
            </div>

            <div>
              <strong>Tools</strong>
              <p>Git • GitHub • VS Code • Vercel • Postman</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Featured Projects</h2>

          <div className="project">
            <h3>Jennifer Creates Portfolio</h3>

            <p>
              Designed and developed a modern portfolio showcasing software
              engineering projects with responsive layouts, reusable React
              components, custom branding, and deployment through Vercel.
            </p>
          </div>

          <div className="project">
            <h3>Summarist</h3>

            <p>
              Built a full-stack audiobook platform featuring authentication,
              protected routes, audio playback, subscription flow, and Firebase
              integration.
            </p>
          </div>

          <div className="project">
            <h3>Skinstric AI</h3>

            <p>
              Developed an AI-inspired skincare application using React,
              TypeScript, responsive UI design, camera integration, and API
              communication.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>

          <h3>Radiation Therapist</h3>

          <p>
            Delivered highly precise radiation treatments while collaborating
            with physicians, physicists, and multidisciplinary healthcare teams.
            Developed exceptional communication, attention to detail, workflow
            management, and critical thinking skills that transfer directly into
            software engineering.
          </p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <p>
            <strong>Frontend Simplified</strong>
            <br />
            Software Engineering Program
          </p>

          <br />

          <p>
            <strong>Radiation Therapy Program</strong>
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrintableResume;