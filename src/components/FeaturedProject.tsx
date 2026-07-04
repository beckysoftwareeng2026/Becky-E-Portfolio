import summarist from "../assets/screenshots/summarist.png";
import type { Project } from "../data/projects";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="bg-gradient-to-br from-purple-50 to-slate-100 p-4 md:p-8">
        <img
          src={summarist}
          alt="Summarist application screenshot"
          className="w-full rounded-2xl border border-slate-200 object-cover shadow-lg transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
          Featured Project
        </p>

        <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
          {project.title}
        </h3>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          {project.description}
        </p>

        <ul className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
          <li>✓ Authentication</li>
          <li>✓ Stripe Payments</li>
          <li>✓ Audio Player</li>
          <li>✓ Protected Routes</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.demo}
            className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;