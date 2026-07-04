import skinstric from "../assets/screenshots/skinstric.png";
import type { Project } from "../data/projects";

const screenshots: Record<string, string> = {
  Skinstric: skinstric,
};

function ProjectCard({ project }: { project: Project }) {
  const hasDemo = project.demo.length > 0;
  const hasGithub = project.github.length > 0;
  const screenshot = screenshots[project.title];

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${project.title} screenshot`}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-slate-100 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Currently in Development
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-950">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Live Demo
            </a>
          ) : (
            <span className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-400">
              Demo Soon
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
            >
              GitHub
            </a>
          ) : (
            <span className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400">
              GitHub Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;