import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const hasDemo = project.demo.trim().length > 0;
  const hasGithub = project.github.trim().length > 0;

  const isCustomKin = project.title === "CustomKin";
  const isComingSoon = project.title === "My Shop API";

  const primaryLink = hasDemo
    ? project.demo
    : hasGithub
      ? project.github
      : "";

  const imageClasses = `w-full object-top transition duration-500 group-hover:scale-[1.03] ${
    featured
      ? "h-full min-h-[340px] object-cover"
      : project.category === "backend"
        ? "h-64 object-contain"
        : "h-64 object-cover"
  }`;

  const projectPreview = isCustomKin ? (
    <div
      className={`flex w-full items-center justify-center bg-slate-100 ${
        featured ? "min-h-[340px]" : "h-64"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
        Currently in Development
      </p>
    </div>
  ) : (
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      className={imageClasses}
    />
  );

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        featured
          ? "grid lg:grid-cols-[1.2fr_1fr]"
          : "flex h-full flex-col"
      }`}
    >
      <div
        className={`overflow-hidden ${
          project.category === "backend" ? "bg-white" : "bg-slate-100"
        } ${featured ? "min-h-[340px] lg:min-h-full" : ""}`}
      >
        {primaryLink && !isCustomKin ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="block h-full"
          >
            {projectPreview}
          </a>
        ) : (
          projectPreview
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
            {project.category === "frontend"
              ? "Frontend Project"
              : "Backend Project"}
          </span>
        </div>

        {primaryLink && !isCustomKin ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="w-fit"
          >
            <h3
              className={`font-bold text-slate-950 transition hover:text-purple-700 ${
                featured ? "text-3xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
          </a>
        ) : (
          <h3
            className={`font-bold text-slate-950 ${
              featured ? "text-3xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
        )}

        <p className="mt-2 font-medium text-purple-600">
          {project.subtitle}
        </p>

        <p className="mt-5 flex-1 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-purple-600 hover:text-purple-700"
            >
              GitHub
            </a>
          ) : (
            <span className="cursor-not-allowed rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400">
              GitHub Soon
            </span>
          )}

          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Live Demo
            </a>
          ) : (
            <span className="cursor-not-allowed rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400">
              {isComingSoon || isCustomKin
                ? "Coming Soon"
                : "API Project"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;