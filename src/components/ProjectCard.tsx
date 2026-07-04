import type { Project } from "../data/projects";
import summarist from "../assets/screenshots/summarist.png";
import skinstric from "../assets/screenshots/skinstric.png";

const screenshots: Record<string, string> = {
  Summarist: summarist,
  Skinstric: skinstric,
};
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
     <div className="overflow-hidden">
  {screenshots[project.title] ? (
    <img
      src={screenshots[project.title]}
      alt={project.title}
      className="h-56 w-full object-cover transition duration-500 hover:scale-105"
    />
  ) : (
    <div className="flex h-56 items-center justify-center bg-slate-100 text-slate-400">
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
          <a
            href={project.demo}
            className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;