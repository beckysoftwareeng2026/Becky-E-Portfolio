import summarist from "../assets/screenshots/summarist.png";
import type { Project } from "../data/projects";

function FeaturedProject({ project }: { project: Project }) {
  const hasDemo = project.demo.length > 0;
  const hasGithub = project.github.length > 0;

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="bg-gradient-to-br from-purple-50 to-slate-100 p-4 md:p-8">
        <img
          src={summarist}
          alt={`${project.title} screenshot`}
          className="w-full rounded-2xl border border-slate-200 object-cover shadow-lg transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
          Featured Project
        </p>

        <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-2 text-xl font-semibold text-slate-500">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          {project.description}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-950">
              The Challenge
            </h4>
            <p className="mt-3 leading-7 text-slate-600">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-950">
              My Solution
            </h4>
            <p className="mt-3 leading-7 text-slate-600">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-bold text-slate-950">
            What I Learned
          </h4>

          <ul className="mt-4 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {project.learned.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-purple-50 px-4 py-3 text-purple-700"
              >
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg"
            >
              Live Demo
            </a>
          ) : (
            <span className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-400">
              Demo Soon
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
            >
              GitHub
            </a>
          ) : (
            <span className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-400">
              GitHub Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;