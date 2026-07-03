import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Summarist",
    description:
      "A subscription-based book summary platform with authentication, protected routes, audio playback, and responsive UI.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Skinstric",
    description:
      "A React rebuild of an AI-powered skincare analysis experience with modern component architecture and polished UI.",
    technologies: ["React", "TypeScript", "API Integration"],
    github: "#",
    demo: "#",
  },
  {
    title: "CustomKin",
    description:
      "A flagship full-stack application focused on custom user experiences, dashboards, and production-level architecture.",
    technologies: ["React", "Node.js", "SQL", "REST APIs"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
          Featured Work
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-950">
          Projects built with purpose
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A collection of applications and backend projects that demonstrate
          frontend development, APIs, authentication, databases, and deployment.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;