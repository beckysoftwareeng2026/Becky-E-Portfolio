import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const frontendProjects = projects.filter(
    (project) => project.category === "frontend"
  );

  const featuredFrontendProject = frontendProjects.find(
    (project) => project.featured
  );

  const otherFrontendProjects = frontendProjects.filter(
    (project) => project.id !== featuredFrontendProject?.id
  );

  const backendProjects = projects.filter(
    (project) => project.category === "backend"
  );

  return (
    <section id="projects" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
            Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A collection of frontend experiences and backend applications built
            with modern web technologies.
          </p>
        </div>

        <div className="mb-24">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-slate-200" />

              <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                Frontend
              </span>

              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <h3 className="text-center text-3xl font-bold text-slate-950">
              Frontend Projects
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              Responsive interfaces, interactive experiences, API integrations,
              and user-focused applications.
            </p>
          </div>

          {featuredFrontendProject && (
            <div className="mb-10">
              <ProjectCard
                project={featuredFrontendProject}
                featured
              />
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {otherFrontendProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-slate-200" />

              <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                Backend
              </span>

              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <h3 className="text-center text-3xl font-bold text-slate-950">
              Backend Projects
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              REST APIs, server-side applications, CRUD operations, middleware,
              validation, filtering, and data handling.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {backendProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;