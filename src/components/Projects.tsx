import FadeIn from "./FadeIn";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.title === "Summarist"
  );

  const otherProjects = projects.filter(
    (project) => project.title !== "Summarist"
  );

  return (
    <section id="projects" className="bg-slate-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Building software that solves real problems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every project represents another step in my journey as a software
            engineer. I focus on building modern, scalable applications with
            clean architecture, thoughtful user experiences, and technologies
            used in professional software development.
          </p>

          {/* Featured Project */}

          {featuredProject && (
            <div className="mt-16">
              <FeaturedProject project={featuredProject} />
            </div>
          )}

          {/* Other Projects */}

          <div className="mt-24">
            <h3 className="text-3xl font-bold text-slate-950">
              More Projects
            </h3>

            <p className="mt-4 max-w-2xl text-slate-600">
              Additional applications, APIs, and full-stack projects that
              continue to expand my skills and experience.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Projects;