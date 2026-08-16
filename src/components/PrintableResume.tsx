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

            <p>Junior Software Engineer</p>
            </div>

        <div className="resume-contact">
  <span>Newnan, Georgia</span>
  <span>•</span>

  <a
    href="https://jennifercreates.dev"
    target="_blank"
    rel="noreferrer"
  >
    Portfolio
  </a>

  <span>•</span>

  <a
    href="https://github.com/jennifercreates01"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <span>•</span>

  <a
    href="https://www.linkedin.com/in/jennifer-cobb-software-engineer"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2>Professional Summary</h2>
<p>
  Junior Software Engineer building full-stack applications with React,
  TypeScript, Node.js, Express, SQL, and REST APIs. Completed a paid frontend
  development internship building a production-style application for
  Skinstric.ai. Brings precision, communication, and problem-solving from a
  healthcare career in radiation oncology.
</p>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div>
              <strong>Languages & Web</strong>
              <p>JavaScript • TypeScript • HTML5 • CSS3 • SQL</p>
            </div>

            <div>
              <strong>Frameworks & Libraries</strong>
              <p>React • Next.js • Vite • Tailwind CSS • React Flow</p>
            </div>

            <div>
              <strong>Backend & APIs</strong>
              <p>Node.js • Express • REST APIs • Firebase</p>
            </div>

            <div>
              <strong>Tools & Platforms</strong>
              <p>Git • GitHub • Vercel • Render • Postman • VS Code • Stripe</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Professional Experience</h2>

          <div className="project">
  <h3>Frontend Developer — Frontend Simplified</h3>

  <p>
    <strong>Paid Internship • Jun 2026 – Jul 2026</strong>
  </p>

  <p>
    Built a responsive React and TypeScript application for Skinstric.ai,
    integrating REST APIs, image upload, live camera capture, asynchronous
    state handling, and Vercel deployment.
  </p>
</div>

          <div className="project">
  <h3>Radiation Therapist — City of Hope</h3>

  <p>
    <strong>Dec 2023 – Present • Newnan, Georgia</strong>
  </p>

  <p>
    Deliver high-precision treatments within multidisciplinary teams,
    strengthening attention to detail, communication, and calm
    problem-solving under pressure.
  </p>
</div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Featured Projects</h2>

        <div className="project">
  <h3>CustomKin</h3>

  <p>
    Interactive family tree application built with React, TypeScript, Vite,
    and React Flow, featuring relationship modeling, custom graph layout,
    reusable nodes and edges, and theme-driven design.
  </p>
</div>

         <div className="project">
  <h3>Summarist</h3>

  <p>
    Subscription-based application built with Next.js, TypeScript, Firebase,
    Stripe, and Tailwind CSS with authentication, protected routes, audio
    playback, and responsive design.
  </p>
</div>

          
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>

          <div className="project">
  <h3>Frontend Simplified</h3>
  <p>
    Software Engineering Program • Apr 2026 – Jul 2026
  </p>
</div>

<div className="project">
  <h3>Cambridge College of Healthcare and Technology</h3>
  <p>
    Associate of Science, Medical Radiologic Technology • Jan 2020 – Dec 2021
  </p>
</div>

       
        </section>
      </div>
    </main>
  );
}

export default PrintableResume;